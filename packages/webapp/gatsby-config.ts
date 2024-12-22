import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://realsoftware.netlify.app/`,
    title: "Real Software | Personal Website of Krishna Sagar Rayudu",
    description: "Personal Website of Krishna Sagar Rayudu",
    keywords:
      "Krishna Sagar Rayudu, Software Engineer, IoT, Open Source, Rust, WebAssembly Leadership, Personal Portfolio",
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        theme_color: `#28A744`,
        icon: "./static/target.webp",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-M1TM57B05F"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
};

export default config;
