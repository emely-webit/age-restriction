import React from 'react'
import { Grid, Typography, Box, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary
    }
}));

const Butik = () => {
    const classes = useStyles()

    return (
        <main>
            <Grid container direction="row" align="center" justify="center" spacing={2}>
                <Grid item md={9}>
                    <Typography variant="h4">Tjek alder</Typography>
                    <Box bgcolor>
                        <form className={classes.background}>
                            <TextField
                                id="standard-full-width"
                                label="Scan sygesikringskort"
                                classes={{root: classes.root}}
                                fullWidth
                                margin="normal"

                            />
                        </form>
                    </Box>
                    <Box>
                        <Box>
                            <Typography variant="h5">Information</Typography>


                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3}>Hejsa</Grid>
            </Grid>
        </main>
    )
}

export default Butik
