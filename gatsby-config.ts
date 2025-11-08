import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Natalia Płocka - Grafik & UI/UX Designer | Portfolio Glad Vision`,
    siteUrl: `https://www.nataliaplocka.pl/`
  },
  pathPrefix: 'projekt/natalia-portfolio/', // only on glad.vision domain
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.svg"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
  }, {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ['GTM-T772B6P9'],
      pluginConfig: { head: false },
    },
  }, {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /src\/assets\/icons/
      },
      svgo: true,
      svgrConfig: {
        jsxRuntime: 'automatic',
        titleProp: false,
      },
    }
  }]
};

export default config;
