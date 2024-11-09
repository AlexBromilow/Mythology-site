import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"


const IndexPage: React.FC<PageProps<Queries.SiteMetadataQuery>> = ({ data }) => {
  const { title } = useSiteMetadata();
  return (
    <div>Site Name: {title}</div>
  )
}

export default IndexPage

