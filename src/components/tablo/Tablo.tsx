import React from 'react';
import s from './Tablo.module.css';

type PropsType = {
    number: number,
    maxNumber: number
}

export const Tablo = (props: PropsType) => {

    const tableClassName = s.number
        + (props.number >= props.maxNumber ? ' ' + s.error : '')

    return (
        <div className={tableClassName}><b>{props.number}</b></div>
    )
}