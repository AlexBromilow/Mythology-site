import React, { FunctionComponent } from "react";

type RichTextImageProps = {
    imageRef: string
}

const RichTextImage: FunctionComponent<RichTextImageProps> = ({ imageRef }) => {
    return (
        <img src={imageRef} width={300} />
    )
}

export default RichTextImage;