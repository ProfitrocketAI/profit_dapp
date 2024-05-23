const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");
const UserType = require("./types/UserType");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getTotalSupply } = require("../services/blockchain");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello World";
      },
    },
    me: {
      type: UserType,
      resolve(parent, args, context) {
        if (!context.user) throw new Error("Not authenticated");
        return User.findById(context.user.id);
      },
    },
    totalSupply: {
      type: GraphQLString,
      async resolve() {
        return await getTotalSupply();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const { name, email, password } = args;
        let user = await User.findOne({ email });

        if (user) throw new Error("User already exists");

        user = new User({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "5 days",
        });

        return { ...user._doc, id: user.id, token };
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const { email, password } = args;
        let user = await User.findOne({ email });

        if (!user) throw new Error("Invalid Credentials");

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) throw new Error("Invalid Credentials");

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "5 days",
        });

        return { ...user._doc, id: user.id, token };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
