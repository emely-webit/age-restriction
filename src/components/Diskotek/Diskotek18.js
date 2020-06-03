import React from 'react'
import {ReactComponent as Balloon} from '../Icons/Balloon.svg';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { positions } from '@material-ui/system';

const useStyles = makeStyles({
    // mainPosition:{
    //     position: "relative",
    // },
    iconBalloon: {
        overflow: "unset",
    },
    // positionBallon:{
    //     position: "absolute",
    // },
    // balloonPosition1:{
    //     top: 0,
    //     left: "10%"
    // }
})


function Diskotek18() {

    const classes = useStyles();

    return (
        <main position="relative">
            {/* <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.positionBallon}`} color="primary" /> */}
            {/* <SvgIcon component={Balloon} className={`${classes.iconBalloon} ${classes.positionBallon} ${classes.balloonPosition1}` } color="secondary" /> */}
            <SvgIcon component={Balloon}  color="secondary" className={classes.iconBalloon} position="absolute"
        top={40} />
            {/* <Balloon color="secondary"/> */}
        </main>
    )
}

export default Diskotek18
 