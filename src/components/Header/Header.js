import React from 'react';
import {makeStyles, AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {ReactComponent as MenuIcon} from '../Icons/MenuIcon.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Age Restriction
                        </Typography>
                    <Button edge="end" color="inherit" aria-label="menu" disableRipple>
                        <MenuIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
