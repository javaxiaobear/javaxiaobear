import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // "/program-nav/",
  "/study-tutorial/",
  "/interview/",
  "/lick-brick-java/",
    {
    text: "开发必备",
    icon: "creative",
    prefix: "/dev-necessary/",
    children: [
      {
        text: "安装教程",
        icon: "config",
        link: "install/",
      },
      {
        text: "激活指南",
        icon: "select",
        link: "activation/",
      },
      {
        text: "珍藏资源",
        icon: "study",
        link: "resource/",
      },
      {
        text: "常见问题",
        icon: "ask",
        link: "problem/",
      },
    ],
  },
  "/architecture/",

  "/about/",
]);
