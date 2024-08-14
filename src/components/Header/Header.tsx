'use client'

import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "@/store/actions/themeActions";
import s from './header.module.css'


const Header: FC = () => {
    const dispatch = useDispatch()
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode)

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <header className={`${s.header} ${isDarkMode ? s.dark : s.light}`}>
            <div className={s.header__container}>
                <div className={s.header__logo}>
                    <img src="" alt=""/>
                </div>
                <nav className={s.header__navbar}>
                    <ul className={s.header__list}>
                        <li className={s.header__item}>Home</li>
                        <li className={s.header__item}>About</li>
                        <li className={s.header__item}>Contact</li>
                    </ul>
                    <button onClick={handleToggleTheme}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;