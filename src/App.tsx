import React, {useEffect, useState} from 'react';
import './App.css';
import {Tablo} from "./components/tablo/Tablo";
import {Button} from "./components/button/Button";
import {Setting} from "./components/setting/Setting";


function App() {
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [number, setNumber] = useState<number>(startValue)
    const STEP = 1
    useEffect( () => {
        let newMaxValue = localStorage.getItem('maxValueKey')
        if (newMaxValue) {
            setMaxValue(JSON.parse(newMaxValue))
        }
        let newStartValue = localStorage.getItem('startValueKey')
        if (newStartValue) {
            setStartValue(JSON.parse(newStartValue))
            setNumber(JSON.parse(newStartValue))
        }
    }, [] )
    // useEffect( () => {
    //     localStorage.setItem('startValueKey', JSON.stringify(startValue))
    // }, [startValue] )
    // useEffect( () => {
    //     localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
    // }, [maxValue] )



    const onClickInc = () => {
        if (number < maxValue && number >= startValue) {
            setNumber(number => number + STEP)
        }
    }
    const onClickReset = () => {
        setNumber(startValue)
    }
    const onClickSet = () => {
        setError(null)
        setMessage(null)
        onClickReset()
        localStorage.setItem('startValueKey', JSON.stringify(startValue))
        localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
    }
    const changeMaxValue = (newMaxValue: number) => {
        setMessage(null)
        setMaxValue(newMaxValue)
        newMaxValue > startValue
            ? setMessage("Введите значение и нажмите set")
            : setError("Стартовое значение не может быть больше или равен максимальному")
    }

    const changeStartValue = (newStartValue: number) => {
        setMessage(null)
        setStartValue(newStartValue)
        maxValue > newStartValue
            ? setMessage("Введите значение и нажмите set")
            : setError("Стартовое значение не может быть больше или равен максимальному")
    }

    const showError = (error: string | null) => {
        setError(error)
    }

    const displayValueOnTablo = error
        ? error
        : message ? message : number


    return (
        <body>
        <div className="Setting">
            <Setting changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}
                     showError={showError}
                     maxValue={maxValue}
                     startValue={startValue}
                     error={error}
            />
            <div className="ButtonsContainer">
                <Button name={'set'} callBack={onClickSet} disabledButton={!!error}/>
            </div>
        </div>
        <div className="Tablo">
            <Tablo tablo={displayValueOnTablo} maxValue={maxValue} isError={!!error}/>
            <div className="ButtonsContainer">
                <Button name={'inc'} callBack={onClickInc}
                        disabledButton={error ? true : message ? true : number >= maxValue}/>
                <Button name={'reset'} callBack={onClickReset}
                        disabledButton={error ? true : message ? true : number === startValue}/>
            </div>
        </div>
        </body>
    );
}

export default App;
