// docusaurus.config.ts (ESM)
import type { Config } from "@docusaurus/types";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Config = {
  title: "Smart Pomodoro Docs",
  tagline: "All docs in one place",

  // >>> GitHub Pages: user domain + repo-pad
  url: "https://elsgoossens.github.io",
  baseUrl: "/smartPomodoro-docs/",

  favicon: "img/docs.ico",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  themeConfig: {
    navbar: {
      title: "Smart Pomodoro Docs",
      logo: { alt: "Smart Pomodoro", src: "img/timer.svg" },
      items: [
        // Handige link naar je Storybook op dezelfde Pages site
        { label: "Storybook", to: "/smartPomodoro-docs/storybook/" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} Smart Pomodoro`,
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/", // docs op de root van je site
          sidebarPath: path.join(__dirname, "sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: path.join(__dirname, "src/css/custom.css"),
        },
      },
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: { mermaid: true },
};

export default config;
