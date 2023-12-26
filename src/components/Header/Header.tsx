'use client';
import React, { useContext }  from 'react';
import {HeaderTitle} from "@/types/headerTypes";
import Profile from "@/components/Profile/Profile";
import {ThemeContext} from "@/components/ThemeContext/ThemeContext";
import '@/app/Header.css';
import {Link} from "react-router-dom";


interface HeaderProps{
    titles:HeaderTitle[]
}

const Header = ({titles}:HeaderProps) => {

    const { theme, setTheme } = useContext(ThemeContext);
    const themes = ['light', 'dark', 'blue'];

    const changeTheme = () => {
        const index = themes.indexOf(theme);
        const nextIndex = (index + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    return (
        <header className="bg-slate-800 text-white p-2 flex gap-5 items-center justify-between">

            <div className="flex gap-5 items-center">
                <a href="/" className="flex items-center gap-2">
                    <img style={{width:"50px",height:"50px"}} src="/images/logo.png" alt=""/>
                </a>

                {titles.map(t=>{
                    return <Link to={t.href}>
                        {t.title}
                    </Link>
                })}
            </div>

            <div className="dropdown relative">
                <img
                    style={{width:"50px",height:"50px"}}
                    src="/images/avatar.png"
                    alt="Профіль"
                    className="dropdown-toggle"
                />
                <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    <Profile username="Юзернейм" email="email@example.com" bio="Біографія" /> {/* Використовуйте компонент Profile */}
                </div>
            </div>
            <button onClick={changeTheme}>Змінити тему</button>
        </header>
    );
};

export default Header;
