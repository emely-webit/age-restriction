import React, { useState, useRef, useEffect } from 'react'
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
    },
    aside: {
        height: '100%',
    }
}));

const Butik = () => {
    const classes = useStyles()
    const [information, setInformation] = useState()
    const [user, setUser] = useState({
        name: null,
        birthDate: null,
        age: null
    })
    const inputEl = useRef(null)

    useEffect(() => {
        if(!information) return

        let name = information[0].replace('%', '').split('&').filter((x) => x).reverse().join(' ')

        let birth = information[information.length-1].slice(17,23)
        
        let array = birth.match(/.{1,2}/g)
        let birthDate = new Date(`${array[1]}/${array[0]}/${array[2]}`);
        let today = new Date()
        let diff = today-birthDate
        let age = Math.floor(diff/31557600000)
        

        setUser({...user, name, birthDate: birth, age: age})

    }, [information])

    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setInformation(inputEl.current.value.split(' ').filter((x) => x))

        inputEl.current.value = ''
    }

    return (
        <main>
            <Grid container direction="row" align="center" justify="center" spacing={2}>
                <Grid item md={9}>
                    <Typography className={classes.bold} variant="h2">Tjek alder</Typography>
                    <Box p={5}>
                        <Box bgcolor="primary.main" color="primary.contrastText">
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField
                                    label="Scan sygesikringskort"
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                    InputProps={{
                                        className: classes.white,
                                    }}
                                    inputRef={inputEl}
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
                            <Card className={classes.card}>
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
                    <Box component="aside" bgcolor="primary.light"  pt={2} className={classes.aside}>
                        <Typography className={classes.bold} variant="h4" align="center" color="textSecondary">Afventer godkendelse</Typography>
                    </Box>
                </Grid>
            </Grid>
        </main>
    )
}

export default Butik
