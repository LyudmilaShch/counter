import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./components/tablo/Tablo";
import {Button} from "./components/button/Button";
import {Setting} from "./components/setting/Setting";

function App() {
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [maxValue, setMaxValue] = useState(5)
    const [newMaxValue, setNewMaxValue] = useState(maxValue)
    const [startValue, setStartValue] = useState(0)
    const [newStart, setNewStart] = useState(startValue)
    const STEP = 1
    const [number, setNumber] = useState<number>(startValue)
    const onClickInc = () => {
        if (number < maxValue && number >= startValue) {

            setNumber(number => number + STEP)
        }
    }
    const onClickReset = () => {
        setNumber(startValue)
        }

    const onClickSet = () => {
        setMaxValue(newMaxValue)
        setStartValue(newStart)
        onClickReset()
        setMessage(null)
    }


    const changeMaxValue = (newMaxValue: number) => {
        setNewMaxValue(newMaxValue)

        // setMessage("Нажмите set")
        // if (newMaxValue > 0 && newMaxValue > newStart && newMaxValue !== newStart) {
        //     setError(null)
        //     setNewMaxValue(newMaxValue)
        // } else {
        //     setError('error')
        // }
    }
    const changeStartValue = (newStartValue: number) => {
        setNewStart(newStartValue)


        // setMessage("Нажмите set")
        // if (newStartValue > 0 && newStartValue < newMaxValue && newStartValue !== newMaxValue) {
        //     setError(null)
        //     setNewStart(newStartValue)
        // } else {
        //     setError('error')
        // }
    }
const showError = (error:string | null) => {
    setError(error)
}

    return (
        <body>
        <div className="Setting">
            <Setting changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} showError={showError} error={error}/>

            <div className="ButtonsContainer">
                <Button name={'set'} callBack={onClickSet} disabledButton={error ? true : false}/>
            </div>
        </div>
        <div className="Tablo">
            <Tablo tablo={error
                ? error
                : message
                    ? message
                    : number} maxValue={maxValue}/>
            <div className="ButtonsContainer">
                <Button name={'inc'} callBack={onClickInc} disabledButton={number >= maxValue}/>
                <Button name={'reset'} callBack={onClickReset} disabledButton={number === startValue}/>
            </div>
        </div>
        </body>
    );
}

export default App;
