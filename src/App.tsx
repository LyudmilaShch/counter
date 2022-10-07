import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./components/tablo/Tablo";
import {Button} from "./components/button/Button";

function App() {

    const MAXNUMBER = 5
    const STARTNUMBER = 0
    const STEP = 1
    const [number, setNumber] = useState<number>(STARTNUMBER)
    const onClickInc = () => {
        if (number < MAXNUMBER && number >= STARTNUMBER) {
            setNumber(number => number + STEP)
        }
    }
    const onClickReset = () => {
        setNumber(STARTNUMBER)
    }

    return (
        <body>
        <div className="App">
            <Tablo number={number} maxNumber={MAXNUMBER}/>
            <div className="ButtonsContainer">
                <Button name={'inc'} callBack={onClickInc} disabledButton={number >= MAXNUMBER}/>
                <Button name={'reset'} callBack={onClickReset} disabledButton={number === STARTNUMBER}/>
            </div>
        </div>
        </body>
    );
}

export default App;
