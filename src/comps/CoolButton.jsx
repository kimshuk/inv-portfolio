import React from "react"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  buttonStyle: props => {
    return {
      color: props.cool ? "blue" : "red",
      backgroundColor: props.cool ? "orange" : "yellow",
    }
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
