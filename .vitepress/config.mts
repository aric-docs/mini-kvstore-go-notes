import { defineConfig, loadEnv } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { VitePWA } from "vite-plugin-pwa";
import { pwaConfig } from "./pwa.config";

// 使用 VitePress 的 loadEnv 加载环境变量
// mode: '' 会加载 .env 文件（只加载 VITE_ 开头的变量）
const env = loadEnv("", process.cwd());

export default defineConfig({
  srcDir: "./src",
  base: env.VITE_BASE_URL || "/",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
  ],
  title: "Mini KV Store",
  description: "A production-ready, segmented key-value storage engine written in Go",
  outDir: "./dist",
  vite: {
    plugins: [VitePWA(pwaConfig)],
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "MiniKvStore",
      description: "SITE_DESCRIPTION",
      themeConfig: {
        logo: "/favicon.svg",
        lastUpdated: {
          text: "更新时间",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        outline: {
          label: "大纲",
          level: [2, 3],
        },
        nav: [
          { text: "首页", link: "/" },
          { text: "指南", link: "/posts/guide/index.md" },
          { text: "API", link: "/posts/api/index.md" },
          { text: "架构", link: "/posts/architecture/index.md" },
          { text: "部署", link: "/posts/deployment/index.md" },
        ],
        sidebar: generateSidebar({
          documentRootPath: "src",
          scanStartPath: "/posts",
          collapsed: false,
          capitalizeFirst: true,
          useTitleFromFileHeading: true,
          useTitleFromFrontmatter: true,
          hyphenToSpace: true,
          excludePattern: ["README.md"],
          debugPrint: false,
        }),
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/aric-go/mini-kvstore-go" },
        ],
        footer: {
          message: "基于 MIT 许可发布",
          copyright: "Copyright © 2019-present aric.zheng",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      title: "MiniKvStore",
      description: "SITE_DESCRIPTION",
      themeConfig: {
        logo: "/favicon.svg",
        lastUpdated: {
          text: "Last updated",
        },
        docFooter: {
          prev: "Previous",
          next: "Next",
        },
        outline: {
          label: "On this page",
          level: [2, 3],
        },
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Guide", link: "/en/posts/guide/index.md" },
          { text: "API", link: "/en/posts/api/index.md" },
          { text: "Architecture", link: "/en/posts/architecture/index.md" },
          { text: "Deployment", link: "/en/posts/deployment/index.md" },
        ],
        sidebar: generateSidebar({
          documentRootPath: "src/en",
          scanStartPath: "/posts",
          collapsed: false,
          capitalizeFirst: true,
          useTitleFromFileHeading: true,
          useTitleFromFrontmatter: true,
          hyphenToSpace: true,
          excludePattern: ["README.md"],
          debugPrint: false,
        }),
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search documentation",
              },
              modal: {
                noResultsText: "No results for",
                resetButtonTitle: "Reset search",
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                  closeText: "to close",
                },
              },
            },
          },
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/aric-go/mini-kvstore-go" },
        ],
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2019-present AUTHOR_NAME",
        },
      },
    },
  },
});
