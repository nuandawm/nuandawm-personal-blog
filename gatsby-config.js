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
        ]
      },
    },
  ],
};
