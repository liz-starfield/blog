import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/space/",
  head: [
    ['link', {rel: 'icon', herf: '/logo.png'}]
  ],
  
  locales: {
    "/": {
      title: "Liz",
      description: "Follow your heart",
      lang: "en-US", 
    },
    "/zh/": {
      title: "莉芝",
      description: "趁早把生活折腾成你想要的样子",
      lang: "zh-CN",
    },
  },

  theme,
});
