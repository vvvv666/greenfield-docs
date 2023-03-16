import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Greenfield Guide",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
