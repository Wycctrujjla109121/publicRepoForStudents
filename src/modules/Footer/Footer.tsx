import Link from 'next/link';

import s from './Footer.module.scss'
import { FooterProps } from './Footer.types';

export function Footer({}:FooterProps){
    return (
        <footer className={s.footer}>
            <Link className={s.footer__link} href={'/'}>Главная</Link>
            <Link className={s.footer__link} href={'/auth'}>Авторизация</Link>
            <Link className={s.footer__link} href={'/privacy'}>Подтверждение</Link>
        </footer>
    );
};