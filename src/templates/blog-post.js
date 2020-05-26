import React from "react"
import { Button } from "@material-ui/core"
import Link from "gatsby-link"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <Button color="primary">My Button</Button>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
