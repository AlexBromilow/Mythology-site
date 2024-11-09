import React, { Children } from "react";
import Layout from './src/stories/Components/Layout/Layout';
import { GatsbySSR } from "gatsby";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
    element
}) => {
    return (
        <Layout>
            {element}
        </Layout>
    )
}