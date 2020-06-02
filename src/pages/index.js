import React from "react"
import { Grid } from "@material-ui/core"
import Header from "../comps/Header"
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
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={8} justifyContent="center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            earum consequatur, a dolor fuga natus eligendi voluptatibus ut
            itaque, totam tempora minus optio aliquid perspiciatis odio nulla.
            Error, deserunt soluta?
          </Grid>
          <Grid xs={0} sm={2}></Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
