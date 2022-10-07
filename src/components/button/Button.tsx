import React from "react";
import s from './Button.module.css';

type ButtonType = {
    name: string
    callBack: () => void
    disabledButton: boolean
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    const buttonClassName = s.button
        + (props.disabledButton ? ' ' + s.disabled : '')


    return (
        <button onClick={onClickHandler} disabled={props.disabledButton} className={buttonClassName}>
            <b> {props.name}</b></button>
    )
}