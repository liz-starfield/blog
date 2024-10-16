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
        {text:"LLM", collapsible: true, link:"LLM/",prefix: "LLM/", children:"structure"},
        {text:"Python", collapsible: true, link:"Python/",prefix: "Python/", children:"structure"},
        {text:"Pytorch", collapsible: true, link:"pytorch/",prefix: "pytorch/", children:"structure"},          
        {text:"MySQL", collapsible: true, link:"mysql/",prefix: "mysql/", children:"structure"}, 
        {text:"Redis", collapsible: true, link:"redis/",prefix: "redis/", children:"structure"}, 
        {text:"MQ", collapsible: true, link:"mq/",prefix: "mq/", children:"structure"}, 
        {text:"Spring", collapsible: true, link:"spring/",prefix: "spring/", children:"structure"}, 
        {text:"Java", collapsible: true, link:"java/",prefix: "java/", children:"structure"}, 
        {text:"JVM", collapsible: true, link:"jvm/",prefix: "jvm/", children:"structure"}, 
        {text:"JUC", collapsible: true, link:"juc/",prefix: "juc/", children:"structure"}, 
        {text:"Frontend", collapsible: true, link:"frontend/",prefix: "frontend/", children:"structure"}, 
        {text:"Linux", collapsible: true, link:"linux/",prefix: "linux/", children:"structure"},       
        {text:"Docker", collapsible: true, link:"docker/",prefix: "docker/", children:"structure"}, 
        {text:"API", collapsible: true, link:"api/",prefix: "api/", children:"structure"}, 
        {text:"Code", collapsible: true, link:"code/",prefix: "code/", children:"structure"}, 
        {text:"CS", collapsible: true, link:"cs/",prefix: "cs/", children:"structure"}, 
        {text:"MicroService", collapsible: true, link:"micro_service/",prefix: "micro_service/", children:"structure"}, 
        {text:"Tools", collapsible: true, link:"tools/",prefix: "tools/", children:"structure"},  
        {text:"Language", collapsible: true, link:"Language/", prefix: "Language/", children:"structure"},     
      ]
    },
  ],
});