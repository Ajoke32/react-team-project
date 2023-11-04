'use client';
import React, { useContext, useState, useEffect, useRef }  from 'react';
import {HeaderTitle} from "@/types/headerTypes";
import Profile from "@/components/Profile/Profile";
import {ThemeContext} from "@/components/ThemeContext/ThemeContext";
import '@/app/Header.css';
import '@/app/theme/light.css'
import '@/app/theme/dark.css'
import '@/app/theme/blue.css'

interface HeaderProps{
    titles:HeaderTitle[]
}

const Header = ({ titles }: HeaderProps) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const themes = ['light', 'dark', 'blue'];

    const changeTheme = () => {
        const index = themes.indexOf(theme);
        const nextIndex = (index + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    const handleTextClick = () => {
        // Ця функція при кліку на текст змінює тему на наступну в списку
        const index = themes.indexOf(theme);
        const nextIndex = (index + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    const useFetchData = (username: string) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch(`/api/topics/${username}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    if (data) {
                        return JSON.parse(data);
                    } else {
                        throw new Error('No data received');
                    }
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }, [username]);

        return { data, loading };
    };

    // Використання кастомного хука
    const { data, loading } = useFetchData('Admin');
    const themeRef =  useRef<HTMLElement>(null);

    useEffect(() => {
        if (themeRef.current) {
            themeRef.current.className = `p-2 flex gap-5 items-center justify-between ${theme}`;
        }
    }, [theme]);

    return (
        <header ref={themeRef} className={`p-2 flex gap-5 items-center justify-between ${theme}`}>


        <div className="flex gap-5 items-center">
                <a href="/" className="flex items-center gap-2">
                    <img style={{ width: "50px", height: "50px" }} src="/images/logo.png" alt="" />
                </a>

                {titles.map(t => {
                    return (
                        <a href={t.href} key={t.title} onClick={handleTextClick}>
                            {t.title}
                        </a>
                    );
                })}
            </div>

            <div className="dropdown relative">
                <img
                    style={{ width: "50px", height: "50px" }}
                    src="/images/avatar.png"
                    alt="Профіль"
                    className="dropdown-toggle"
                />
                <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    <Profile username="Юзернейм" email="email@example.com" bio="Біографія" hobbies={["Футбол", "Баскетбол", "Плавання"]}/>
                </div>
            </div>

            <button onClick={changeTheme}>Змінити тему</button>

        </header>
    );
};

export default Header;