import React, {ChangeEvent, useState} from 'react';
import s from './Value.module.css';
type SettingPropsType = {
    newValue: (newValue: number) => void
    value: number
    error: string | null
    //showError: (error: string | null) => void
}

export const Value = (props: SettingPropsType) => {

    const [error, setError] = useState<string | null>(null)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {


        if (e.currentTarget.valueAsNumber >= 0) {
            setError(null)
        } else {
            setError("Значение должно быть больше 0")
        }
        props.newValue(e.currentTarget.valueAsNumber)
    }

    const InputClassName =
        error
            ? s.error
            : props.error === "Стартовое значение не может быть больше или равен максимальному" ? s.error : " "

    return (
        <div>
            <input type="number" onChange={onChangeValue}  value={props.value} className={InputClassName}/>
        </div>
    )
}