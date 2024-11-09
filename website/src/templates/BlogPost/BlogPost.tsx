import { graphql, PageProps } from "gatsby";
import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import RichText from "../../stories/Components/RichText/RichText";

type BlogPageProps = PageProps<Queries.BlogPostQuery>;

const BlogPage: FunctionComponent<BlogPageProps> = ({ data }: BlogPageProps) => {
    return (
        <>
            <Helmet>
                <title>{data.post?.title} </title>
            </Helmet>
            <div>
                This is a blog page for {data.post?.title}
                <div>
                    <RichText data={data.post?._rawBody} />
                </div>
            </div>
        </>
    )
}

export default BlogPage

export const query = graphql`
    query BlogPost($slug: String!) {
    post: sanityPost(slug: {
        current: {
            eq: $slug
        }
    })
    {
        title
        id
            author {
            name
            id
                slug {
                current
            }
        }
            mainImage {
                asset {
                    gatsbyImageData(width: 300, placeholder: BLURRED, formats: [JPG])
                }
        }
        _rawBody
    }
}`