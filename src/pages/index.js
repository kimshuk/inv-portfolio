import React from "react"
import { Grid } from "@material-ui/core"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>This is Header</Grid>
        <Grid item>This is Content</Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
