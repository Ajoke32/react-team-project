'use client'; import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: (() => {}) as Dispatch<SetStateAction<string>>,
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Цей код тепер виконуватиметься тільки на клієнті
        setTheme('light');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
