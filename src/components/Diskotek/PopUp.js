import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxStyle:{
        width: "75%",
        // margin: "0 auto",
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
    textStyleWhite:{
        color: "#ffffff"
    },
    textStyleBrown:{
        color: theme.palette.info.main
    }
}))

function PopUp(props) {

    const classes = useStyles();

    return (
        <Box bgcolor={props.backgroundColor} className={classes.boxStyle} 
            color={props.textColor}>
            <h2>{props.stageTitle} = {props.age} år</h2>
            <p>{props.name}</p>
            <hr className={classes.hrStyle} />
            <p>{props.allowedTo}</p>
        </Box>
    )
}

export default PopUp
