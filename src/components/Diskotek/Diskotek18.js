import React from 'react'
import {ReactComponent as Balloon} from '../Icons/Balloon.svg';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mainPosition:{
        position: "relative",
        // width: "95%",
        // margin: "0 auto"
    },
    iconBalloon: {
        overflow: "unset",
        height: "10px",
        top: 0,
        position: "absolute",
    },
    balloonPosition:{
        left: 0
    },
    balloonPosition1:{
        left: "8%"
    },
    balloonPosition2:{
        left: "41%"
    },
    balloonPosition3:{
        left: "51%"
    },
    balloonPosition4:{
        left: "88%"
    },
    balloonPosition5:{
        right: "2%"
    },
})


function Diskotek18() {

    const classes = useStyles();

    return (
        <main className={classes.mainPosition}>
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition}`} color="primary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition1}` } color="secondary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition2}` } color="secondary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition3}` } color="secondary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition4}` } color="secondary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition5}` } color="secondary" />
        </main>
    )
}

export default Diskotek18
 