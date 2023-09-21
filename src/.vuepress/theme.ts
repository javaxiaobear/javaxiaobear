import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";
export default hopeTheme({
  hostname: "https://javaxiaobear.cn",

  author: {
    name: "小熊同学",
    url: "https://javaxiaobear.cn",
  },

  iconAssets: "iconfont",
  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "https://gitee.com/javaxiaobear/javaXiaobear.git",
 // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  //
  // docsDir: "demo/theme-docs/src",

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "",
      displayFooter: true,
      metaLocales: {
        editLink: '编辑此页',
      },
    },
  },

  encrypt: {
    config: {
      "/study-tutorial/distributed/": ["888888"],
      "/architecture/distributed/": ["888888"],
      "/interview/sourceCode/": ["888888"],
    },
  },
  encryptLocales:{
    iconLabel: '文章已加密',
    placeholder: '关注公众号【小熊学Java】, 回复：密码'
  },

  plugins: {
    //版权
    copyright:{
      author: '小熊学Java',
      global: true,
      triggerWords: 68
    },
    sitemap:{

    },
    pwa: true,

    // comment: {
    //   provider: "Waline",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: false,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      card: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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
      vuePlayground: true,
    },
  },
});
