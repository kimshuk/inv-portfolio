import React from "react"
import { Grid } from "@material-ui/core"
import Header from "../comps/Header"
import Content from "../comps/Content"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container display="flex">
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8} justifyContent="center">
            <Content></Content>
          </Grid>
          <Grid xs={false} sm={2}></Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
