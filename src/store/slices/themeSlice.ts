import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React, {useContext} from 'react';
import ThemeContext from '@/components/ThemeContext/ThemeContext';

interface ThemeState{
    theme:string
}

const initialState:ThemeState={
    theme:"dark"
}
export const themeSlice = createSlice({
    name:"learned",
    initialState,
    reducers:{
        changeTheme:(state:ThemeState,action:PayloadAction<string>)=>{
            state.theme = action.payload;
        }
    },

})

export const learnedReducer = themeSlice.reducer;

const { theme, setTheme } = useContext(ThemeContext);
const themes = ['light', 'dark', 'blue'];

const changeTheme = () => {
    const index = themes.indexOf(theme);
    const nextIndex = (index + 1) % themes.length;
    setTheme(themes[nextIndex]);
};

const handleTextClick = () => {
    const index = themes.indexOf(theme);
    const nextIndex = (index + 1) % themes.length;
    setTheme(themes[nextIndex]);
};
