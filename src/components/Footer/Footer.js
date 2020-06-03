import React from 'react'
import { makeStyles, Typography, AppBar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        padding: 4,
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <AppBar py={2} className={classes.appBar} component="footer">
            <Typography variant="body2" color="white" align="center">
                {`Copyright ${new Date().getUTCFullYear()} © `}
                Emely Buchholt & Daniel Pedersen
            </Typography>
        </AppBar>
    )
}

export default Footer
