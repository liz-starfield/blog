import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "intro",
    {
      text: "博客",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
