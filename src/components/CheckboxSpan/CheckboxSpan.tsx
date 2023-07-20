import { ComponentProps } from 'react';
import s from './CheckboxSpan.module.scss'

interface CheckboxSpanProps extends ComponentProps<'input'> {
    placeholder?: string
}

export function CheckboxSpan({ placeholder = 'CehckboxSpan', ...props }: CheckboxSpanProps) {
    return (
        <div className={s.wrapper}>
            <label htmlFor="CheckboxSpan" className={s.title}>{placeholder}</label>
            <input {...props} id='CheckboxSpan' type='checkbox' className={s.checkbox} />
            <label htmlFor="CheckboxSpan" className={s.span}>
            </label>
        </div>
    );
};