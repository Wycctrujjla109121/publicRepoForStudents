import s from './CheckboxSpan.module.scss'

export function CheckboxSpan({ placeholder = 'CehckboxSpan' }) {
    return (
        <div className={s.wrapper}>
            <label htmlFor="CheckboxSpan" className={s.title}>{placeholder}</label>
            <input id='CheckboxSpan' type='checkbox' className={s.checkbox} />
            <label htmlFor="CheckboxSpan" className={s.span}>
            </label>
        </div>
    );
};