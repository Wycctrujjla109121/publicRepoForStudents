import Link from 'next/link';

import s from './Header.module.scss'
import { HeaderProps } from './Header.types';

export function Header({ }: HeaderProps) {
    return (
        <header className={s.wrapper}>
            <div className={s.list}>
                <Link className={s.list__link} href={'/'}>Главная</Link>
                <Link className={s.list__link} href={'/auth'}>auth</Link>
            </div>
        </header>
    );
};