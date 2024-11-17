import { PortableTextComponents, PortableTextProps } from "@portabletext/react";
import React from "react";
import RichTextImage from "./RichTextElements/Image/RichTextImage";

const RichTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => <RichTextImage imageRef={value.asset?.url} />
    }
}

export default RichTextComponents;