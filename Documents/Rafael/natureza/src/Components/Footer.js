import * as React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: '100px',
        color:'gray',
    },  

  }))

export default function Home() {
  const classes = useStyles()
    return (
      <Typography component="h6" variant="h6" align="center" className= {classes.footer} >
        Coded by Rafael Almeida
      </Typography>
        
    )}