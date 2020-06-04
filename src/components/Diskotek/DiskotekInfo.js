import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    headingStyle:{
        fontSize: "50px",
        color: theme.palette.info.main,
        textAlign: "center"
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
        }
    }
}))

function DiskotekInfo(props) {

    const classes = useStyles();

    return (
        <section>
            <h1 className={classes.headingStyle}>Tjek din alder {props.headlineTitle}</h1>
            <input type="text" className={classes.inputStyle} placeholder="Scan sygesikringskort" />
        </section>
    )
}

export default DiskotekInfo
