'use client'

import s from './CheckboxSlide.module.scss'

export function CheckboxSlide({ placeholder = 'Принимаю что-то' }) {
    return (
        <div className={s.wrapper}>
            <label className={s.label} htmlFor="CheckboxSlide">{placeholder}</label>
            <input id='CheckboxSlide' className={s.input} type='checkbox' />
        </div>
    );
};