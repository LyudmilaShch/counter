import React from 'react';
import s from './Tablo.module.css';

type PropsType = {
    tablo: number | string,
    maxValue: number
}

export const Tablo = (props: PropsType) => {

    const tableClassName =
        typeof props.tablo === "string"
            ? s.string + (props.tablo === 'error' ? '' + s.error : '')
            : s.number + (props.tablo >= props.maxValue ? ' ' + s.error : '')

    return (
        <div className={tableClassName + ' ' + (s.tablo)}><b>{props.tablo}</b></div>
    )
}