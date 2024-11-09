type BlockChildren = {
    marks: string[],
    _type: string,
    _key: string,
    text: string
}

type MarkDef = {
    _key: string,
    _type: string,
    href: string
}

type BlockAsset = {
    _ref: string,
    _type: string
}

type Block = {
    _key: string,
    _type: string,
    children: BlockChildren[],
    style: string,
    markDefs: MarkDef[],
    listItem: string,
    level: number,
    asset: BlockAsset[],
}

type BlockList = {
    data: Block[]
}