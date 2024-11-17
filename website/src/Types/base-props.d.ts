import React, { ReactNode } from "react";

export interface BaseReactProps {
    key?: React.Key,
    children?: ReactNode | ReactNode[]
}