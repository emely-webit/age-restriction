import React from 'react'
import Balloons from './Balloons'
import DiskotekInfo from './DiskotekInfo'
// import PopUp from './PopUp';

function Diskotek18() {

    let headlineTitle = "18+";

    // const allowedToOptions = ["Personen må IKKE komme ind", "Personen må komme ind, Men må IKKE købe alkohol eller tobak", "Personen må købe alkohol og tobak"];

    // // Alle nedenfor skal være dynamisk
    // let stageTitle = "Godkendt";
    // let age = "18";
    // let name = "Emely Buchholt";
    // let backgroundColor = "success.main";
    // let allowedTo = allowedToOptions[2];

    return (
        <main>
            <Balloons/>
            <DiskotekInfo headlineTitle={headlineTitle} />
            {/* <PopUp stageTitle={stageTitle} age={age} name={name} backgroundColor={backgroundColor} allowedTo={allowedTo} /> */}
        </main>
    )
}

export default Diskotek18
 