import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

interface SEOProps {
  children: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = site.siteMetadata;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <Helmet>
        <title>{title || site.siteMetadata.title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      {children}
    </>
  );
};

export default SEO;
