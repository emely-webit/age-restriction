import React from 'react'
import {ReactComponent as Balloon} from '../Icons/Balloon.svg';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mainPosition:{
        position: "relative",
        height: "200px"
    },
    iconBalloon: {
        overflow: "unset",
        height: "5%",
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


function Balloons() {

    const classes = useStyles();

    return (
        <aside className={classes.mainPosition}>
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition}`} color="secondary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition1}` } color="error" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition2}` } color="error" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition3}` } color="error" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition4}` } color="error" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition5}` } color="secondary" />
        </aside>
    )
}

export default Balloons
 