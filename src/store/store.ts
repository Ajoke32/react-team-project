import {configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { topicReducer } from '@/store/slices/topic';
import { learnedReducer } from '@/store/slices/learned';


export const store = configureStore({
    reducer:{
        topicReducer,
        learnedReducer
    },
    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(thunk)
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;