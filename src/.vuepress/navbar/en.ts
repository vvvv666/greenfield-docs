import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Guide",
    icon: "creative",
    prefix: "/docs",
    children: [
      {
        text: "Greenfield BlockChain",
        icon: "creative",
        prefix: "/greenfield-blockchain/",
        children: [
          "introduction",
          "core-concept",
          "modules",
          "api-sdk",
          "cli",
          "resources",
          "run-node"
        ],
      },
    ],
  },
]);
