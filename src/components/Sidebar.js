import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBill,
  faChartLine,
  faGavel,
  faRobot,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <aside class="bg-zinc-900 dark:bg-zinc-800 w-64 p-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]">
      <nav class="space-y-4">
        <a
          href="#"
          class="block text-xl font-semibold text-accent hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="home"
            class="mr-2 svg-inline--fa fa-home"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
            ></path>
          </svg>
          Home
        </a>
        <a
          href="#investment-pool"
          class="block text-xl font-semibold text-accent hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="money-bill"
            class="mr-2 svg-inline--fa fa-money-bill"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm176 224v-64c35.35 0 64 28.65 64 64h-64zm0-224v-64h64c0 35.35-28.65 64-64 64zm160 224v-64c35.35 0 64 28.65 64 64h-64zm0-224v-64h64c0 35.35-28.65 64-64 64zm160 224v-64c35.35 0 64 28.65 64 64h-64zm0-224v-64h64c0 35.35-28.65 64-64 64z"
            ></path>
          </svg>
          Investment Pool
        </a>
        <a
          href="#staking"
          class="block text-xl font-semibold text-accent hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chart-line"
            class="mr-2 svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M64 400c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h16zM128 336c0 8.8 7.2 16 16 16h48v80c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-80h64c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v256h-32zm192 128c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-64v-64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h160z"
            ></path>
          </svg>
          Staking
        </a>
        <a
          href="#ai-hub-metrics"
          class="block text-xl font-semibold text-accent hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chart-pie"
            class="mr-2 svg-inline--fa fa-chart-pie"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M288 32C129.1 32 0 129.6 0 288s129.1 256 288 256 288-97.6 288-256S446.9 32 288 32zm0 416c-88.4 0-160-71.6-160-160S199.6 128 288 128s160 71.6 160 160-71.6 160-160 160zm93.3-224.7l-115 115c-4.7 4.7-12.3 4.7-17 0l-115-115c-4.7-4.7-4.7-12.3 0-17l6.9-6.9c4.7-4.7 12.3-4.7 17 0L192 233.3V88c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v145.3l33.8-33.8c4.7-4.7 12.3-4.7 17 0l6.9 6.9c4.7 4.7 4.7 12.3 0 17z"
            ></path>
          </svg>
          AI Hub Metrics
        </a>
        <a
          href="#proposals-voting"
          class="block text-xl font-semibold text-accent hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="gavel"
            class="mr-2 svg-inline--fa fa-gavel"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504.5 189.9l-92.9-92.8c-9.4-9.4-24.6-9.4-33.9 0l-24.3 24.3 126.8 126.8 24.3-24.3c9.4-9.4 9.4-24.6 0-34zM294.7 361.5l-24.3 24.3 126.8 126.8 24.3-24.3c9.4-9.4 9.4-24.6 0-33.9l-92.9-92.9c-9.4-9.3-24.5-9.3-33.9 0zm-169 123.8L51 409.6c-12.5-12.5-12.5-32.8 0-45.3l73.7-73.7c12.5-12.5 32.8-12.5 45.3 0l74.7 74.7c6.3 6.2 6.3 16.4 0 22.6-6.3 6.3-16.4 6.3-22.6 0l-62.1-62.1-45.3 45.3 62.1 62.1c32.1 32.1 84.5 32.2 116.7 0l62.1-62.1-45.3-45.3-62.1 62.1c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6l74.7-74.7c12.5-12.5 32.8-12.5 45.3 0l73.7 73.7c12.5 12.5 12.5 32.8 0 45.3l-74.7 74.7c-25 25-65.6 25-90.6 0z"
            ></path>
          </svg>
          Proposals & Voting
        </a>
        <a
          href="#submit-ai-agent"
          class="block text-xl font-semibold text-accent hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="robot"
            class="mr-2 svg-inline--fa fa-robot"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H480A79.974,79.974,0,0,1,560,176ZM248,272a40,40,0,1,0-40,40A40.00059,40.00059,0,0,0,248,272Zm216,0a40,40,0,1,0-40,40A40.00059,40.00059,0,0,0,464,272Zm-88,96c-66.28125,0-120,53.71875-120,120v48H312V336a32,32,0,0,1,64,0v80H624V336A32,32,0,0,1,592,304Z"
            ></path>
          </svg>
          Submit AI Agent
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
