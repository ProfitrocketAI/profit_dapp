const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP((req) => {
    const token = req.header("x-auth-token");
    let user = null;

    if (token) {
      try {
        user = jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        console.error("Invalid token");
      }
    }

    return {
      schema,
      context: { user },
      graphiql: true,
    };
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
