import React, { FunctionComponent, ReactNode } from "react";
import { SEO } from "../SEO/SEO";

type LayoutProps = {
    children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <SEO />
            {children}
        </>
    )
}

export default Layout;