import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "intro",
    {
      text: "博客",
      icon: "book",
      prefix: "posts/",
      collapsible: true,      
      children: [
        {text:"LLM", collapsible: true, link:"llm/",prefix: "llm/", children:"structure"},
      ]
    },
  ],
});
