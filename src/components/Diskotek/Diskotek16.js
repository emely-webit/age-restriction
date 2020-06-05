import React from 'react'
import Balloons from './Balloons'
import DiskotekInfo from './DiskotekInfo'
// import PopUp from './PopUp';

function Diskotek16() {
    let headlineTitle = "16+ og 18+";

    
    
    // Alle nedenfor skal være dynamisk
    // let stageTitle = "Afvist";
    // let age = "15";
    // let name = "Emely Buchholt";
    // let backgroundColor = "error.main";
    // let allowedTo = "Personen må IKKE købe alkohol og tobak";
    // let textColor = "info.main"
    
    return (
        <main>
            <Balloons/>
            <DiskotekInfo headlineTitle={headlineTitle} />
            {/* <PopUp textColor={textColor} stageTitle={stageTitle} age={age} name={name} backgroundColor={backgroundColor} allowedTo={allowedTo} /> */}
            {/* <PopUp /> */}
        </main>
    )
}

export default Diskotek16
