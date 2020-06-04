import React from 'react'
import {ReactComponent as Balloon} from '../Icons/Balloon.svg';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
        left: 0,
        color: theme.palette.success.main
    },
    balloonPosition1:{
        left: "8%",
    },
    balloonPosition2:{
        left: "25%",
    },
    balloonPosition3:{
        left: "41%",
        color: theme.palette.warning.main
    },
    balloonPosition4:{
        left: "51%",
        color: theme.palette.warning.main
        
    },
    balloonPosition5:{
        left: "69%",
        
    },
    balloonPosition6:{
        left: "88%",
    },
    balloonPosition7:{
        right: "2%",
        color: theme.palette.success.main
    }
}))


function Balloons() {

    const classes = useStyles();

    return (
        <aside className={classes.mainPosition}>
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition}`}  />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition1}` } color="error" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition2}` } color="secondary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition3}` } />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition4}` } />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition5}` } color="secondary" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition6}` } color="error" />
            <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.balloonPosition7}` } />
        </aside>
    )
}

export default Balloons
 