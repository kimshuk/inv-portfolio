import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../components/theme"
import { Button } from "@material-ui/core"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <SEO title="Home" />
      <h1>Welcome</h1>
      <p>
        This will be my portfolio site where I can read personally gathered news
        and info
      </p>
      <Link to="/about">About Page</Link>
      <Button color="primary" variant="outlined">
        My Button
      </Button>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
