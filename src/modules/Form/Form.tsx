'use client'
import { CheckboxSpan, Input } from '@/components';
import s from './Form.module.scss'
import { Controller, useForm } from 'react-hook-form';

export function Form() {

    const { handleSubmit, control, register, formState: { errors } } = useForm(
        {
            defaultValues: {
                Email: '',
                Password: '',
                Имя: '',
                Фамилия: '',
                Отчество: '',
                checkbox: false
            }
        }
    )

    const onSubmit = (values: any) => {
        console.log(values)
    }

    return (
        <div className={s.wrapper}>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='Email'
                    control={control}
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder={'Email'}
                            status={errors.Email}
                            {...register('Email', { required: true, minLength: 5 })}
                            onChange={onChange}
                        />
                    )}
                />
                <Controller
                    name='Password'
                    control={control}
                    render={({ field: { onChange } }) => (
                        <Input placeholder={'Password'} onChange={onChange} />
                    )}
                />
                <Controller
                    name='Имя'
                    control={control}
                    render={({ field: { onChange } }) => (
                        <Input placeholder={'Имя'} onChange={onChange} />
                    )}
                />
                <Controller
                    name='Фамилия'
                    control={control}
                    render={({ field: { onChange } }) => (
                        <Input placeholder={'Фамилия'} onChange={onChange} />
                    )}
                />
                <Controller
                    name='Отчество'
                    control={control}
                    render={({ field: { onChange } }) => (
                        <Input placeholder={'Отчество'} onChange={onChange} />
                    )}
                />
                <Controller
                    name='checkbox'
                    control={control}
                    defaultValue={false}
                    render={({ field: { onChange } }) => (
                        <CheckboxSpan onChange={onChange} />
                    )}
                />
                <button type='submit'>Сохранить</button>
            </form>
        </div>
    );
};