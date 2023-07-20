'use client'

import { ComponentProps, useState } from 'react';
import s from './CheckboxCustom.module.scss'
import classNames from 'classnames';

export function CheckboxCustom({ placeholder = 'CheckboxCustom', ...props }) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={s.wrapper}>
            <h5 onClick={() => setIsActive(!isActive)} className={s.title}>{placeholder}</h5>
            <span onClick={() => setIsActive(!isActive)} className={s.checkbox}>
                <span className={classNames(s.checkbox__before, {
                    [s.checkbox__before_active]: isActive
                })}></span>
                <span className={classNames(s.checkbox__span, {
                    [s.checkbox__span_active]: isActive
                })}></span>
                <span className={classNames(s.checkbox__after, {
                    [s.checkbox__after_active]: isActive
                })}></span>
            </span>
        </div>
    );
};