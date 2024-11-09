import React, { FunctionComponent } from "react";

type RichTextProps = {
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
                if (block._type === "image") {
                    return <p key={block._key}>This is an image</p>
                }

                if (block.style?.startsWith('h')) {
                    return (
                        <p key={block._key}>This is a {block.style}</p>
                    )
                }

                if (block.listItem) {
                    return (
                        <p key={block._key}>This is a list item</p>
                    )
                }

                return (
                    <>
                        {block.children.map(child => <p>{child.text}</p>)}
                    </>
                )

            })}
            {/* {blockList.map(block => {
                return (
                    
                { block.style?.startsWith('h') &&  }
            )})} */}


        </>
    )

}

export default RichText;