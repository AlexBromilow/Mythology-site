import { CreatePagesArgs, type GatsbyNode } from "gatsby";
import path from "path";


type allBlogPostsQuery = {
    readonly blogPosts:
    {
        readonly nodes:
        ReadonlyArray<{
            readonly title: string | null,
            readonly slug: { readonly current: string | null } | null
        }>
    }
}
    ;

const turnPostsIntoPages = async ({ graphql, actions }: CreatePagesArgs) => {
    const blogTemplate = path.resolve('./src/templates/BlogPost/BlogPost.tsx');

    const { data } = await graphql<allBlogPostsQuery>(`
        query allBlogPosts {
        blogPosts: allSanityPost {
                    nodes {
                        title
                        slug {
                            current
                        }
                    }
                }
            }
    `)

    if (!data) {
        return;
    }

    data.blogPosts.nodes.forEach((blogPost) => {
        console.log(`Creating page ${blogPost.title}`)
        actions.createPage({
            path: `posts/${blogPost.slug?.current}`,
            component: blogTemplate,
            context: {
                slug: blogPost.slug?.current
            }
        })
    })
}

export const createPages: GatsbyNode["createPages"] = async (params) => {
    await Promise.all([
        turnPostsIntoPages(params)
    ])
}