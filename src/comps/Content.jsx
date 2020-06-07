import React from "react"
import { Grid } from "@material-ui/core"
import CoffeeCard from "./CoffeeCard"
import FreeBreakfastRoundedIcon from "@material-ui/icons/FreeBreakfastRounded"
import coffeeMakerList from "../comps/constants"

const Content = () => {
  const getCoffeeMakerCard = coffeeMakerObj => {
    const { title, price, description, avatarUrl, imageUrl } = coffeeMakerObj
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMakerObj}></CoffeeCard>
      </Grid>
    )
  }

  return (
    <Grid container spacing={2}>
      {coffeeMakerList.map(coffeeMakerObj =>
        getCoffeeMakerCard(coffeeMakerObj)
      )}
    </Grid>
  )
}

export default Content
