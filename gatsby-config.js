require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  
  module.exports = {
    trailingSlash: 'always',
    siteMetadata: {
      title: 'Eric Phifer LLC - Portfolio',
      siteUrl: 'https://ericphifer.com',
      description: 'I build websites for businesses and individuals looking for an online presence. The things you love, you want to share, but the technical aspects can really get in the way. Thats my purpose: I bring life to your passion.',
    },
    /* Your site config here */
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-netlify',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-image',
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: process.env.SANITY_PROJECT_ID,
          dataset: process.env.SANITY_DATASET,
          apiVersion: '2022-05-17',
          token: process.env.SANITY_TOKEN,
        },
      },
      {
        resolve: 'gatsby-plugin-sanity-image',
        options: {
          projectId: process.env.SANITY_PROJECT_ID,
          dataset: process.env.SANITY_DATASET,
        },
      },
    ],
  }
  