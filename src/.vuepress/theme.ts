import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://liz-in-tech.github.io",
  favicon: "/blogger.png",
  author: {
    name: "Liz",
    url: "https://github.com/liz-in-tech",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/blogger.png",

  repo: "https://github.com/liz-in-tech",

  docsDir: "src",

  blog: {
    medias: {
      GitHub: "https://github.com/liz-in-tech",
    },
  },
  sidebar: "heading",
  sidebarSorter:["date","filename"],  
  displayFooter: false,
  editLink: false,
  lastUpdated: false,
  contributors: false,
  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      blog: {
        description: "",
        intro: "/intro.html",
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        description: "",
        intro: "/zh/intro.html",
      },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  plugins: {
    blog: true,
    search: true,
    copyCode: {},
    components: {
      components: ["Badge", "VPCard", "PDF"],
    },
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      katex: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
