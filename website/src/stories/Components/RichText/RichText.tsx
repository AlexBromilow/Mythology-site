import React, { FunctionComponent } from "react";
import { BaseReactProps } from "../../../Types/base-props";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "./PortableTextComponents";

type RichTextProps = BaseReactProps & {
    data: Record<string, unknown> | null | undefined,
}

const RichText: FunctionComponent<RichTextProps> = ({ data }) => {
    if (!data) {
        return;
    }

    let blockList: Block[] = [];

    for (const key in data) {
        const block = data[key] as Block;

        blockList.push(block);
        console.log(block)
    }

    return (
        <>
            {blockList.map(block => {

                return (
                    <>
                        <PortableText value={block} components={RichTextComponents} />
                    </>
                )

            })}


        </>
    )

}

export default RichText;