import { Checkbox, CheckboxSlide, CheckboxSpan, CheckboxState } from '@/components';
import s from './Form.module.scss'

export function Form() {
    return (
        <div className={s.wrapper}>
            <Checkbox placeholder='Checkbox' />
            <CheckboxSlide placeholder='CheckboxSlide' />
            <CheckboxSpan />
            <CheckboxState />
        </div>
    );
};