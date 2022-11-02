import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Value.module.css';

type SettingPropsType = {
    newValue: (newValue: number) => void
    showError: (error: string | null) => void
    error: string | null
}

export const Value = (props: SettingPropsType) => {
    const [newValue, setNewValue] = useState(0)
    const [error, setError] = useState<string | null>(props.error)


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) > 0) {
            setNewValue(Number(e.currentTarget.value))
            setError(null)
        } else {
                setError("Значение должно быть больше 0")
        }
        console.log(error)
        props.showError(error)
    }
    const offEditMode = () => {
      return  props.newValue(newValue)
    }
    return (
        <div>
            <input type="number" onChange={onChangeValue} onBlur={offEditMode} className={error ? s.error : " "}/>
            {error && <div>{error}</div>}
        </div>
    )
}