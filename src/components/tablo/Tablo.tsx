import React, {ChangeEvent} from 'react';
import s from './Tablo.module.css';

type PropsType = {
    number: number;
}

export const Tablo = (props: PropsType) => {

    const tableClassName = s.number
        + (props.number === 5 ? ' ' + s.error : '')

    return (
        <div className={tableClassName}><b>{props.number}</b></div>
    )
}