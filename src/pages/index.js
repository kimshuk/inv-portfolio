import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>
      This will be my portfolio site where I can read personally gathered news
      and info
    </p>
    <Link to="/about">About Page</Link>
  </Layout>
)

export default IndexPage
