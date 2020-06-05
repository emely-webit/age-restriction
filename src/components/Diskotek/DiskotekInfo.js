import React, {useRef, useState, useEffect} from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    headingStyle:{
        fontSize: "50px",
        color: theme.palette.info.main,
        display: "block",
        textAlign: "center",
        fontWeight: "bold",
        paddingBottom: "20px"
    },
    inputStyle:{
        width: "80%",
        margin: "0 auto",
        borderRadius: "20px",
        border: "none",
        padding: "50px 10px 30px",
        display: "block",
        backgroundColor: theme.palette.secondary.main,
        '&::placeholder':{
            color: "white",
            fontSize: "50px",
            fontWeight: "bolder"
        },
        '&:focus':{
            color: "white",
            padding: "16px 10px 21px",
            fontSize: "50px",
            outline: "none"
        }
    },
    boxStyle:{
        width: "75%",
        position: "absolute",
        top: "400px",
        left: "12.5%",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        padding: "10px 0 10px",
    },
    hrStyle:{
        width: "10%",
        margin: "0 auto",
        border: "1px solid black"
    },
    hideBox: {
        display: "none"
    },
    ageAccept18:{
        backgroundColor: theme.palette.success.main,
        color: theme.palette.info.main
    },
    ageAccept16:{
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.info.main
    },
    ageDenied:{
        backgroundColor: theme.palette.error.main,
        color: "#ffffff"
    }
}))

function DiskotekInfo(props) {

    const classes = useStyles();
    const [information, setInformation] = useState()
    const [user, setUser] = useState({
        name: "Fornavn Efternavn",
        birthDate: "000000",
        age: null
    })
    const inputDisko = useRef(null)

    useEffect(() => {
        if (!information) return
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

        setInformation(inputDisko.current.value.split(' ').filter((x) => x))


        inputDisko.current.value = ''
    }

    const ValideringDisko = () => {

        if(!user.age){
            return (
                <Box bgcolor={props.backgroundColor} className={classes.hideBox}>
                    <h2>Afventer id</h2>
                    <p>Navn Efternavn</p>
                    <hr className={classes.hrStyle} />
                    <p></p>
                </Box>
            )
        }
        else if(user.age < 16 && props.headlineTitle === "16+ og 18+") {
            return (
                <Box className={`${classes.boxStyle} ${classes.ageDenied}`}>
                    <h2>Afvist = {user.age} år</h2>
                    <p>{user.name}</p>
                    <hr className={classes.hrStyle} />
                    <p>Personen må IKKE komme ind</p>
                </Box>
            )
        }
        else if(user.age < 18 && props.headlineTitle === "18+") {
            return (
                <Box className={`${classes.boxStyle} ${classes.ageDenied}`}>
                    <h2>Afvist = {user.age} år</h2>
                    <p>{user.name}</p>
                    <hr className={classes.hrStyle} />
                    <p>Personen må IKKE komme ind</p>
                </Box>
            )
        }
        else if(user.age >= 18) {
            return (
                <Box className={`${classes.boxStyle} ${classes.ageAccept18}`}>
                    <h2>Godkendt = {user.age} år</h2>
                    <p>{user.name}</p>
                    <hr className={classes.hrStyle} />
                    <p>Personen må komme ind<br/>Personen må købe alkohol og tobak</p>
                </Box>
            )
        }
        else if(user.age >= 16 && props.headlineTitle === "16+ og 18+") {
            return (
                <Box className={`${classes.boxStyle} ${classes.ageAccept16}`}>
                    <h2>Godkendt = {user.age} år</h2>
                    <p>{user.name}</p>
                    <hr className={classes.hrStyle} />
                    <p>Personen må komme ind<br/>Personen må IKKE købe alkohol eller tobak</p>
                </Box>
            )
        }
        else{
            return (
                <Box bgcolor={props.backgroundColor} className={classes.hideBox}>
                    <h2>Afventer id</h2>
                    <p>Navn Efternavn</p>
                    <hr className={classes.hrStyle} />
                    <p></p>
                </Box>
            )
        }
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputDisko" className={classes.headingStyle}>Tjek din alder {props.headlineTitle}</label>
                <input ref={inputDisko} type="text" className={classes.inputStyle} placeholder="Scan sygesikringskort" />
            </form>
            <ValideringDisko/>
        </section>
    )
}

export default DiskotekInfo
