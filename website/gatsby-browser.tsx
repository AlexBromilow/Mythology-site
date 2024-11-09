import React, { Children } from "react";
import Layout from './src/stories/Components/Layout/Layout';
import { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
    element
}) => {
    return (
        <Layout>
            {element}
        </Layout>
    )
}