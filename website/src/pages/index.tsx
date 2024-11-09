import * as React from "react"
import { graphql, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps<Queries.SiteMetadataQuery>> = ({ data }) => {
  return (
    <div>Site Name: {data.site?.siteMetadata?.title}</div>
  )
}

export default IndexPage

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
  `