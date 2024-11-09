import { graphql, useStaticQuery } from "gatsby";


interface MetadataQueryProps {
    site: {
        siteMetadata: {
            title: string,
            description: string,
        }
    }
}

export const useSiteMetadata = () => {
    const data = useStaticQuery<MetadataQueryProps>(graphql`
        query SiteMetadata {
            site {
                siteMetadata {
                    title,
                    description
                }
            }
        }
    `)

    return data.site?.siteMetadata;
}