import React, {ChangeEvent, useState} from 'react';
import s from './Setting.module.css';
import {Value} from "../NewValue/Value";
import {log} from "util";

type SettingPropsType = {
    changeMaxValue: (newMaxValue: number) => void
    changeStartValue: (newStartValue: number) => void
    showError: (error: string | null) => void
    error: string | null
}

export const Setting = (props: SettingPropsType) => {
    const [newMaxValue, setNewMaxValue] = useState(0)
    const [newStartValue, setNewStartValue] = useState(0)
    const [error, setError] = useState<string | null>(props.error)

    const changeMaxValue = (newValue: number) => {
        setNewMaxValue(newValue)
        props.changeMaxValue(newValue)
    }

    const changeStartValue = (newValue: number) => {
        setNewStartValue(newValue)
        props.changeStartValue(newValue)
    }

    const showError = (error:string | null) => {
        setError(error)
        props.showError(error)
    }


    return (
        <div>
            <div>max value</div>
            <Value newValue={changeMaxValue} showError={showError} error={error}/>
            <div>start value</div>
            <Value newValue={changeStartValue} showError={showError} error={error}/>
        </div>
    )
}