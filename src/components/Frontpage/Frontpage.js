import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Frontpage() {
    const classes = useStyles();

    return (
         <div className={classes.root}>
            
            <Button variant="contained" color="primary" href="#butik">
                Butikker
            </Button>
            <Button variant="contained" color="primary" href="#diskotek-over-16">
                Diskotek over 16 år
            </Button>
            <Button variant="contained" color="primary" href="#diskotek-over-18">
                Diskotek over 18 år
            </Button>
        </div>
    )
}

export default Frontpage
