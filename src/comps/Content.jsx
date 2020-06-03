import React from "react"
import { Grid } from "@material-ui/core"
import CoffeeCard from "./CoffeeCard"

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <CoffeeCard></CoffeeCard>
      </Grid>
    </Grid>
  )
}

export default Content
