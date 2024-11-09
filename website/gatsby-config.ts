import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

if (process.env.PRODUCTION) {
  require("dotenv").config({
    path: `.env.production`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MythologyBlog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: {
    generateOnBuild: true,
    typesOutputPath: './src/Types/gatsby-types.d.ts'
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": process.env.GATSBY_SANITY_PROJECT_ID,
      "dataset": process.env.GATSBY_SANITY_PROJECT_DATASET
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }],
};

export default config;
