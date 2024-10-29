import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  head: [
    ['link', {rel: 'icon', herf: '/blogger.png'}]
  ],
  
  locales: {
    "/": {
      title: "Liz",
      description: "Follow your heart",
      lang: "en-US", 
    },
    "/zh/": {
      title: "Liz",
      description: "Follow your heart",
      lang: "zh-CN",
    },
  },

  theme,
});
