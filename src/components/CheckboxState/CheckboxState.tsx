'use client'

import classNames from 'classnames';
import s from './CheckboxState.module.scss'
import { useState } from 'react';

export function CheckboxState({ placeholder = 'CheckboxState' }) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={s.wrapper}>
            <h5 onClick={() => setIsActive(!isActive)} className={s.title}>{placeholder}</h5>
            <div onClick={() => setIsActive(!isActive)} className={s.checkbox}>
                <span className={classNames(s.checkbox__circle, {
                    [s.checkbox__circle_active]: isActive
                })}></span>
            </div>
        </div>
    );
};