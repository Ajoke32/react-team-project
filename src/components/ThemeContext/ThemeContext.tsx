'use client';
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: (() => {}) as Dispatch<SetStateAction<string>>,
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const initialTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;