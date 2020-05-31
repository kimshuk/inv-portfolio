import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../components/theme"
import { Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "50px",
  },
  buttonStyles: {
    color: "purple",
    border: 0,
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <SEO title="Home" />
        <h1>Welcome</h1>
        <p>
          This will be my portfolio site where I can read personally gathered
          news and info
        </p>
        <Typography
          className={classes.helloThereStyle}
          variant="h1"
          color="primary"
        >
          Hello There!
        </Typography>
        <Link to="/about">About Page</Link>
        <Button
          className={classes.buttonStyles}
          color="primary"
          variant="outlined"
        >
          My Button
        </Button>
      </ThemeProvider>
    </Layout>
  )
}

export default IndexPage
