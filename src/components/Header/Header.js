import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, Drawer, Box } from '@material-ui/core'
import { ReactComponent as MenuIcon } from '../Icons/MenuIcon.svg';
import { ReactComponent as Logo } from '../Icons/Logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        
    },
    drawer: {
        width: 250,
    }
}));

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const handleDrawer = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Logo />
                        </Typography>
                    <Button edge="end" color="inherit" aria-label="Open information" onClick={handleDrawer}>
                        <MenuIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={open} onClose={handleDrawer}>
                <Box className={classes.drawer} m={2}>
                    <Typography variant="h4" align="center">Information</Typography>
                    <Typography variant="body1" align="center">Meningen med dette projekt er meningen at gøre det enkelt at tjekke folks alder, i forhold til de danske regler når det angår aldersgrænser.</Typography>
                </Box>
            </Drawer>
        </div>
    );
}
