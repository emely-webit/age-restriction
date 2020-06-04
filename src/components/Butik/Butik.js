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
        backgroundColor: theme.palette.primary.light,
        height: '100vh',
    },
    warning: {
        color: theme.palette.warning.main,
        fontWeight: 'bold',
    },
    error: {
        color: theme.palette.error.main,
        fontWeight: 'bold',
    },
    success: {
        color: theme.palette.success.main,
        fontWeight: 'bold',
    }
}));

const Butik = () => {
    const classes = useStyles()
    const [information, setInformation] = useState()
    const [user, setUser] = useState({
        name: "Navn Efternavn",
        birthDate: "000000",
        age: null
    })
    const inputEl = useRef(null)

    useEffect(() => {
        if (!information) return
        // if(!inputEl.current.value) return;
        if (information[information.length - 1].length < 47 || information.length < 2) return alert('Prøv igen')

        let name = information[0].replace('%', '').split('&').filter((x) => x).reverse().join(' ')

        let birth = information[information.length - 1].slice(17, 23)

        let array = birth.match(/.{1,2}/g)
        let birthDate = new Date(`${array[1]}/${array[0]}/${array[2]}`);
        let today = new Date()
        let diff = today - birthDate
        let age = Math.floor(diff / 31557600000)


        setUser(u=> ({ ...u, name, birthDate: birth, age: age }))
        setInformation(null)
    }, [information])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setInformation(inputEl.current.value.split(' ').filter((x) => x))


        inputEl.current.value = ''
    }


    const Validering = () => {
        if (!user.age) {
            console.log("test")
            return (
                <Typography className={classes.bold} variant="h4" align="center" color="textSecondary">Afventer godkendelse</Typography>
            )
        } else if (user.age < 16) {
            return (
                <div>
                    <Typography className={classes.error} variant="h4" align="center" color="error">Afvist</Typography>
                    <Typography color="textSecondary" variant="body1">Personen er <span className={classes.bold}>IKKE</span> godkendt til alkohol</Typography>
                </div>
            )
        } else if (user.age >= 18) {
            return (
                <>
                    <Typography className={classes.success} variant="h4" align="center">Godkendt</Typography>
                    <Typography color="textSecondary" variant="body1">Personen er godkendt til at købe alkohol og tobak</Typography>
                </>
            )
        } else if (user.age >= 16) {
            return (
                <div>
                    <Typography className={classes.warning} variant="h4" align="center">Afvist</Typography>
                    <Typography color="textSecondary" variant="body1">Personen er godkendt til at købe alkohol til og med <span className={classes.bold}>16,4%</span> og <span className={classes.bold}>IKKE</span> tobak</Typography>
                </div>
            )
        }
        return
    }

    // const validering = () => {

    //     if(user.age === null){
    //         return(
    //             <Typography className={classes.bold} variant="h4" align="center" color="textSecondary">Afventer godkendelse</Typography>
    //         )
    //     }
    //     else if(user.age < 16){
    //         return (
    //             <div>
    //                 <Typography color="error" className={classes.bold} variant="h4" align="center" color="textSecondary">Afvist</Typography>
    //                 <Typography variant="body1">Personen er <span className={classes.bold}>IKKE</span> godkendt til alkohol</Typography>
    //             </div>
    //         )
    //     }
    //     else if(user.age >= 18){
    //         return (
    //             <div>
    //                 <Typography color="success" className={classes.bold} variant="h4" align="center" color="textSecondary">Godkendt</Typography>
    //                 <Typography variant="body1">Personen er godkendt til at købe alkohol og tobak</Typography>
    //             </div>
    //         )
    //     }
    //     else if(user.age >= 16){
    //         return (
    // <div>
    //     <Typography className={classes.bold} variant="h4" align="center" color="textSecondary">Afvist</Typography>
    //     <Typography variant="body1">Personen er godkendt til at købe alkohol til og med <span className={classes.bold}>16,4%</span> og <span className={classes.bold}>IKKE</span> tobak</Typography>
    // </div>
    //         )
    //     }
    // }

    return (
        <main>
            <Grid component="section" container direction="row" align="center" justify="center" spacing={2}>
                <Grid item md={9}>
                    <Typography className={classes.bold} variant="h2">Tjek alder</Typography>
                    <Box p={5}>
                        <Box bgcolor="primary.main" color="primary.contrastText">
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField
                                    label="Scan sygesikringskort"
                                    fullWidth
                                    margin="normal"
                                    type="text"
                                    autoComplete="off"
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
                                        <Typography id="year" variant="h4" align="left">{user.birthDate}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" align="left">Navn</Typography>
                                        <Typography id="name" variant="h5" align="left">{user.name}</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <Box component="aside" bgcolor="primary.light" p={2} className={classes.aside}>
                        <Validering />
                    </Box>
                </Grid>
            </Grid>
        </main>
    )
}

export default Butik
