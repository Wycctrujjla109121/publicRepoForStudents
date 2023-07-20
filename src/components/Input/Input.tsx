import classNames from 'classnames';

import s from './Input.module.scss'
import { InputProps } from './Input.types';

export function Input({ customSize = 'default', position = undefined, placeholder, status, ...props }: InputProps) {
    return (
        <div className={s.wrapper}>
            <input id='inputId' className={classNames(s.input, s['input__' + customSize], {
                [s.input_center]: position === 'center',
                [s.input_error]: status
            })} placeholder={placeholder} {...props} />
            <label htmlFor='inputId' className={classNames(s.span, {
                [s.span_hidden]: position === 'center'
            })}>{placeholder}</label>
        </div>
    );
};