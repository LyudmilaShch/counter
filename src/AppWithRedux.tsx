import React, {useEffect} from 'react';
import './App.css';
import {Tablo} from "./components/tablo/Tablo";
import {Button} from "./components/button/Button";
import {Value} from "./components/value/Value";
import {
    changeIncAC,
    changeResetAC, loadState, saveState,

} from "./store/tablo-reducer";
import {AppRootStateType, store} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeSettingAC, changeSettingValueAC, changeStartValueAC} from "./store/tablo-reducer";

export type TabloType = {
    startValue: number
    maxValue: number
    error: string | null
    message: string | null
    number: number
}

function AppWithRedux() {
    const tablo = useSelector<AppRootStateType, TabloType>(state => state.tablo)
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
                maxValue: store.getState().tablo.maxValue,
                startValue: store.getState().tablo.startValue,
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


    const displayValueOnTablo = tablo.error
        ? tablo.error
        : tablo.message ? tablo.message : tablo.number


    return (
        <body>
        <div className="Setting">
            <div className="nameInput">
                <div><b>max value</b></div>
                <Value newValue={changeMaxValue} value={tablo.maxValue} error={tablo.error}/>
            </div>
            <div className="nameInput">
                <div><b>start value</b></div>
                <Value newValue={changeStartValue} value={tablo.startValue} error={tablo.error}/>
            </div>

            <div className="ButtonsContainer">
                <Button name={'set'} callBack={onClickSet} disabledButton={!!tablo.error}/>
            </div>
        </div>
        <div className="Tablo">
            <Tablo tablo={displayValueOnTablo} maxValue={tablo.maxValue} isError={!!tablo.error}/>
            <div className="ButtonsContainer">
                <Button name={'inc'} callBack={onClickInc}
                        disabledButton={tablo.error ? true : tablo.message ? true : tablo.number >= tablo.maxValue}/>
                <Button name={'reset'} callBack={onClickReset}
                        disabledButton={tablo.error ? true : tablo.message ? true : tablo.number === tablo.startValue}/>
            </div>
        </div>
        </body>
    );
}

export default AppWithRedux;
