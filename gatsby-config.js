module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `blog[]`,
    author: `Milan Darjanin`,
    description: `Figuring out how to write down my ideas`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/milandarjanin`,
      },
      {
        name: `github`,
        url: `https://github.com/darjanin`,
      },
    ],
  },
}
