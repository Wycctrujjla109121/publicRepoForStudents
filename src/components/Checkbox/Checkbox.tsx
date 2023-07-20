'use client'

import s from './Checkbox.module.scss'

export function Checkbox({ placeholder = 'Принимаю что-то' }) {
    return (
        <div className={s.wrapper}>
            <label className={s.label} htmlFor="checkbox">{placeholder}</label>
            <input id='checkbox' className={s.input} type='checkbox' />
        </div>
    );
};