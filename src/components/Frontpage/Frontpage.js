import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                <Link to="/butik">Butik kontrol</Link>
            </Button>
            <Button variant="contained" color="secondary">
                <Link to="/butik">Butik kontrol</Link>
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#butik">
                Link
            </Button>
        </div>
    )
}

export default Frontpage
