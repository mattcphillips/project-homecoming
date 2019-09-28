module.exports = {
  siteMetadata: {
    title: `Project Homecoming`,
    description: `Project Homecoming is committed to speeding the recovery of the 80,000 American soldiers still missing from World War II, Korea, the Cold War and Vietnam.`,
    author: `Matt Phillips`,
    menuLinks: [
      {
        name:'Home',
        link:'/'
      },
      {
        name:'Mission',
        link:'/mission'
      },
      {
        name:'Programs',
        link:'/programs'
      },
      {
        name:'Their Stories',
        link:'/stories'
      },
      {
        name:'Get Involved',
        link:'/get-involved'
      },
      {
        name:'About Us',
        link:'/about'
      },
      {
        name:'Contact',
        link:'/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
