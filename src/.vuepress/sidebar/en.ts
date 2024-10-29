import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "Blog",
      icon: "book",
      prefix: "posts/",
      collapsible: true,      
      children: [
        {text:"LLM", collapsible: true, link:"llm/",prefix: "llm/", children:"structure"},
      ]
    },
  ],
});