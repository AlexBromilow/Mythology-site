import React, { FunctionComponent } from "react";
import { useSiteMetadata } from "../../../hooks/use-site-metadata";
import { Helmet } from 'react-helmet';

export const SEO: FunctionComponent = () => {
    const { title, description } = useSiteMetadata();

    return (
        <Helmet titleTemplate={`%s - ${title}`}>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}