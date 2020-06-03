import React from 'react'
import { Grid, Typography, Box, TextField, makeStyles } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fefefe'
    },
    card: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.primary.contrastText

    },
    bold: {
        fontWeight: 'bold'
    },
    white: {
        color: theme.palette.primary.contrastText,
        "&.focused": {
            color: theme.palette.primary.contrastText,
            fontWeight: 'bold'
          }
    },
    form: {
        padding: 2
    }
}));

const Butik = () => {
    const classes = useStyles()

    return (
        <main>
            <Grid container direction="row" align="center" justify="center" spacing={2}>
                <Grid item md={9}>
                    <Typography className={classes.bold} variant="h2">Tjek alder</Typography>
                    <Box p={5}>
                        <Box bgcolor="primary.main" color="primary.contrastText">
                            <form className={classes.form}>
                                <TextField
                                    label="Scan sygesikringskort"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        className: classes.white,
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.white,
                                            focused: "focused"
                                        }
                                    }}
                                    autoFocus={true}
                                />
                            </form>
                        </Box>
                        <Box mt={6}>
                            <Card variant="contained" className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.bold} variant="h3" align="left">Information</Typography>
                                    <Box mt={2}>
                                        <Typography variant="body1" align="left">Fødselsdag</Typography>
                                        <Typography id="year" variant="h4" align="left">******</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" align="left">Navn</Typography>
                                        <Typography id="name" variant="h5" align="left">****** **** ********</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <Box bgcolor="primary.light" height="100vh" pt={2}>
                        <Typography className={classes.bold} variant="h4" align="center" color="textSecondary">Afventer godkendelse</Typography>
                    </Box>
                </Grid>
            </Grid>
        </main>
    )
}

export default Butik
