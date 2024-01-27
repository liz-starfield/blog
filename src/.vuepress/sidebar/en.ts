import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "Blog",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
