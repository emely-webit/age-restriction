import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    headingStyle:{
        fontSize: "50px",
        color: '#730202',
        textAlign: "center"
    },
    inputStyle:{
        width: "80%",
        margin: "0 auto",
        borderRadius: "5px",
        border: "1px solid",
        padding: "50px",
        display: "block",
        backgroundColor: "#7C05F2",
        '&::placeholder':{
            color: "white",
            fontSize: "50px",
            fontWeight: "bolder"
        }
    }
}))

function DiskotekInfo() {

    const classes = useStyles();

    return (
        <section>
            <h1 className={classes.headingStyle}>Tjek din alder</h1>
            <input type="text" className={classes.inputStyle} placeholder="Scan sygesikringskort" />
        </section>
    )
}

export default DiskotekInfo
