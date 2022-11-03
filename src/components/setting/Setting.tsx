import React, {useState} from 'react';
import {Value} from "../value/Value";



type SettingPropsType = {
    changeMaxValue: (newValue: number) => void
    changeStartValue: (newValue: number) => void
    showError: (error: string | null) => void
    maxValue: number
    startValue: number
    error: string | null
}

export const Setting = (props: SettingPropsType) => {
    const changeMaxValue = (newValue: number) => {
        props.changeMaxValue(newValue)
    }
    const changeStartValue = (newValue: number) => {
        props.changeStartValue(newValue)
    }

    return (
        <div>
            <div>max value</div>
            <Value newValue={changeMaxValue} value={props.maxValue} error={props.error} showError={props.showError}/>
            <div>start value</div>
            <Value newValue={changeStartValue} value={props.startValue} error={props.error} showError={props.showError}/>
        </div>
    )
}