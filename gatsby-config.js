require("dotenv").config({ path: '.env' })

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {
        assetDir: "./static/",
        iconList: [
          {
            src: "/logos/G2_logo.svg",
            sizes: "16x16",
            type: "image/svg",
          }
        ],

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
          copyright: "© Copyright 2022", // Copyright string for the footer of the website and RSS feed.
          themeColor: "#D83850", // Used for setting manifest and progress theme colors.
          backgroundColor: "#F7F7F7", // Used for setting manifest background color.
          twitterName: "NuandaWM",
        },

        user: {
          id: "NuandaWM",
          firstName: "Nuanda",
          lastName: "WM",
          twitterName: "NuandaWM",
          linkedIn: "giuliano-de-rossi-a8966127",
          github: "nuandawm",
          email: "derossi.giuliano@gmail.com",
          location: "User Locationn",
          about: "A code-holic geek",
          avatar: "/nuandawm-avatar.png",
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "qhr9jqw5jvsf",
        accessToken: process.env.CONTENTFUL_API_KEY,
      }
    }
  ],
};
