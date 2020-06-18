module.exports = {
  proxy: {
    prefix: "/",
    url: "https://app.instakash.net",
  },
  siteMetadata: {
    title: `Instakash`,
    description: `Nos encargamos en ofrecerte el mejor servicio y la mejor asesoria para tus actividades financieras.`,
    author: `@rogerrc12`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00AD97`,
        theme_color: `#00AD97`,
        display: `minimal-ui`,
        icon: `src/assets/images/icono.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
