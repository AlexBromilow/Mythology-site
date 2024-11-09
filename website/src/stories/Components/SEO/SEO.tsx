import React, { FunctionComponent } from "react";
import { useSiteMetadata, MetadataProps } from "../../../hooks/use-site-metadata";
import { Helmet } from 'react-helmet';

export const SEO: FunctionComponent = () => {
    const { title, description } = useSiteMetadata();

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}