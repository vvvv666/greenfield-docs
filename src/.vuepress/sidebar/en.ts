import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    //"",
    //"/docs/README.md",
    //"/docs/greenfield-blockchain/"
    {
      text: "Greenfield BlockChain",
      icon: "note",
      prefix: "",
      children: "structure",
    },
  ],
});
