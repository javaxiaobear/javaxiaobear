import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/",
  port: "8888",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小熊学Java 全能学习+面试指南",
      description: "一个全方面的Java学习型站点，Java学习教程，开发必备教程，面试专栏，架构设计，舔砖Java，共同探索学习新可能，致力打造Java全能学习网站",
    },
  },
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'codeva-R5JHGJXpkD' }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "小熊学Java, Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, 架构设计, 安装教程",
      },
    ],
    //百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?562604ee73afd73426afdb71a5427c74";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
        `
    ]
  ],

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
   }),
  ],
  // plugins: [
  //   componentsPlugin({
  //
  //     rootComponents: {
  //       backToTop: true,
  //       notice: [
  //         {
  //           path: "",
  //           title: "通知",
  //           content: "关注公众号【小熊学Java】</br>" +
  //               "回复：见面礼，领取海量资料",
  //           actions: [
  //             {
  //               text: "Primary Action",
  //               link: "https://theme-hope.vuejs.press/",
  //               type: "primary",
  //             },
  //             { text: "Default Action" },
  //           ],
  //           // fullscreen: true,
  //         },
  //       ],
  //     },
  //   }),
  // ],
});
