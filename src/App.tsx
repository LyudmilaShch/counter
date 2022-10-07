import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./components/tablo/Tablo";
import {Button} from "./components/button/Button";

function App() {

    let [number, setNumber] = useState(0)
    const onClickInc = () => {
        setNumber(++number)
    }
    const onClickReset = () => {
        setNumber(0)
    }

    return (
        <body>
        <div className="App">
            <div>
                <Tablo number={number}/>
                <div className={"ButtonsContainer"}>
                    <Button name={'inc'} callBack={onClickInc} disabledButton={number >= 5}/>
                    <Button name={'reset'} callBack={onClickReset} disabledButton={number === 0}/>
                </div>
            </div>
        </div>
        </body>
    );
}

export default App;
