module.exports = {
  siteMetadata: {
    title: `CIEC`,
    description: `Centro de Investigaciones de Ecosistemas Costeros`,
    author: `Andy`,
  },
  flags: {},
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "galería",
        path: "./src/images/galería/",
      },
      __key: "galería",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "banner",
        path: "./src/images/Banner/",
      },
      __key: "banner",
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-pnpm",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ciec-frontend`,
        short_name: `ciec`,
        start_url: `/`,
        background_color: `#0276df`,
        theme_color: `#0276df`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
}
