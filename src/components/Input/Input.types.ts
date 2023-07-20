import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<'input'> {
    placeholder: string;
    position?: 'center';
    customSize?: 'small' | 'default' | 'large',
    status?: any,
}