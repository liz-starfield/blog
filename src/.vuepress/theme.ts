import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://liz-starfield.github.io",
  favicon: "/blogger.png",
  author: {
    name: "Liz",
    url: "https://github.com/liz-starfield",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/blogger.png",

  repo: "https://github.com/liz-starfield",

  docsDir: "src",

  blog: {
    medias: {
      GitHub: "https://github.com/liz-starfield",
    },
  },
  sidebar: "heading",
  displayFooter: false,
  editLink: false,
  lastUpdated: false,
  contributors: false,
  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      blog: {
        description: "A BackEnd programmer",
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
        description: "一个后端开发者",
        intro: "/zh/intro.html",
      },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  plugins: {
    blog: true,
    copyCode: {},
    components: {
      components: ["Badge", "VPCard"],
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
