import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  // buttonStyle: props => {
  //   return {
  //     color: props.cool ? "blue" : "red",
  //     backgroundColor: props.cool ? "orange" : "yellow",
  //   }
  // },
  buttonStyle: {
    color: "red",
    [theme.breakpoints.down("sm")]: {
      color: "pink",
    },
  },
}))

export default function Hook(props) {
  const classes = useStyles(props)
  return (
    <Button fullWidth className={classes.buttonStyle}>
      The Button
    </Button>
  )
}
