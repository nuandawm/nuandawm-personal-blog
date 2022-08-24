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
          twitterName: "NuandaWM",
          url: "https://nuandawm.xyz/",
          copyright: "© Copyright 2022 | Giuliano De Rossi",
          logoUrl: "/logos/G2_logo.svg",
        },

        user: {
          id: "NuandaWM",
          firstName: "Nuanda",
          lastName: "Fox",
          twitterName: "NuandaWM",
          linkedIn: "giuliano-de-rossi-a8966127",
          github: "nuandawm",
          email: "suxgiu@krasnij-njesa.com",
          location: "User Location",
          about: "A full-stack web developer looking for a challenge!",
          avatar: "https://i.pravatar.cc/300",
        },
      },
    },
  ],
};
