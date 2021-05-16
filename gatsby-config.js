module.exports = {
  siteMetadata: {
    title: `ヤー・スペーステクノロジー`,
    description: `【架空の会社】宇宙工学と意識エネルギー循環研究でオンリーワンを目指します`,
    author: `@atomyah`,
    siteUrl: `https://yah-space.tech`,
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
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    // 「4.1.2gatsby-config.jsの編集」で追加するmicroCMS用の設定
    {
      resolve:'gatsby-source-microcms',
      options:[
        apiKey:'927b6f84-f2dc-45f0-b15e-d235143f4e1d',
        serviceId:'isowa',
        apis:[{
          endpoint:'information',
        }],
}
//microCMS用の設定ここまで
]

    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
