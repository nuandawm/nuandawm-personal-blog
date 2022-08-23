import { SiteConfig } from "./types";

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "NuandaWM's Blog", // Homepage title
    titleShort: "NuandaWM's Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "NuandaWM's Blog", // Website name used for homescreen (PWA) and SEO
    description: "Simply some Nuanda's Stuff.", // Website description used for RSS feeds/meta description tag
    language: "en", // Sets the global HTML lang attribute
    logoUrl: "/logos/G2_logo.svg", // Logo used for SEO
    url: "https://nuandawm.xyz", // Domain of your website without the pathPrefix
    rss: "/rss.xml", // Path to the RSS file
    rssTitle: "NuandaWM RSS Feed", // Title of the RSS feed
    copyright: "© Copyright 2021", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#D83850", // Used for setting manifest and progress theme colors.
    backgroundColor: "#F7F7F7", // Used for setting manifest background color.
  },

  // User configuration
  user: undefined,

  // Organization information used for SEO
  organization: undefined,

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  contentDir: undefined, // Directory for MDX posts
  assetDir: undefined, // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  iconPath: undefined, // Icon used for manifest icon creation.
  iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
  iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

  basePath: undefined, // Base path for mounting pages. Allows for multiple themes to be used in a single website.
};

export default config;
