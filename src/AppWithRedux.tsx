import React, {useEffect} from 'react';
import './App.css';
import {Tablo} from "./components/tablo/Tablo";
import {Button} from "./components/button/Button";
import {Value} from "./components/value/Value";
import {
    changeIncAC,
    changeResetAC, loadState, saveState,

} from "./store/counter-reducer";
import {AppRootStateType, store} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeSettingAC, changeSettingValueAC, changeStartValueAC} from "./store/counter-reducer";

export type CounterType = {
    startValue: number
    maxValue: number
    error: string | null
    message: string | null
    value: number
}

function AppWithRedux() {
    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     let newMaxValue = localStorage.getItem('maxValueKey')
    //     if (newMaxValue) {
    //         setMaxValue(JSON.parse(newMaxValue))
    //     }
    //     let newStartValue = localStorage.getItem('startValueKey')

    //     if (newStartValue) {
    //         setStartValue(JSON.parse(newStartValue))
    //         setNumber(JSON.parse(newStartValue))
    //     }
    // }, [])

    const onClickInc = () => {
        dispatch(changeIncAC())
    }
    const onClickReset = () => {
        dispatch(changeResetAC())
    }
    const onClickSet = () => {
        dispatch(changeSettingAC())

        store.subscribe(() => {
            saveState({
                maxValue: store.getState().counter.maxValue,
                startValue: store.getState().counter.startValue,
            });
        });
        // localStorage.setItem('startValueKey', JSON.stringify(tablo.startValue))
        // localStorage.setItem('maxValueKey', JSON.stringify(tablo.maxValue))
    }
    const changeMaxValue = (newMaxValue: number) => {
        dispatch(changeMaxValueAC(newMaxValue))
        dispatch(changeSettingValueAC())
    }

    const changeStartValue = (newStartValue: number) => {
        dispatch(changeStartValueAC(newStartValue))
        dispatch(changeSettingValueAC())
    }


    const displayValueOnCounter = counter.error
        ? counter.error
        : counter.message ? counter.message : counter.value


    return (
        <body>
        <div className="Setting">
            <div className="nameInput">
                <div><b>max value</b></div>
                <Value newValue={changeMaxValue} value={counter.maxValue} error={counter.error}/>
            </div>
            <div className="nameInput">
                <div><b>start value</b></div>
                <Value newValue={changeStartValue} value={counter.startValue} error={counter.error}/>
            </div>

            <div className="ButtonsContainer">
                <Button name={'set'} callBack={onClickSet} disabledButton={!!counter.error}/>
            </div>
        </div>
        <div className="Tablo">
            <Tablo tablo={displayValueOnCounter} maxValue={counter.maxValue} isError={!!counter.error}/>
            <div className="ButtonsContainer">
                <Button name={'inc'} callBack={onClickInc}
                        disabledButton={counter.error ? true : counter.message ? true : counter.value >= counter.maxValue}/>
                <Button name={'reset'} callBack={onClickReset}
                        disabledButton={counter.error ? true : counter.message ? true : counter.value === counter.startValue}/>
            </div>
        </div>
        </body>
    );
}

export default AppWithRedux;
