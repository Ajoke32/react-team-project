import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const createParamsDefaultFetchAsyncThunk  = <T,TArgs>(url:string,error=null)=>{
    return createAsyncThunk(
        'topic/fetchTopics',
        async  (arg:TArgs,{rejectWithValue,fulfillWithValue})=>{
            let finalArgs = arg!==undefined?arg:"";
            try {
                const response = await axios.get<T>(`${url}${finalArgs}`);
                return fulfillWithValue(response.data);
            }catch (e){
                let finalError = error!==null?error:"Data loading fail, try later";
                return rejectWithValue(finalError)
            }
        }
    )
}

export const createDefaultFetchAsyncThunk  = <T>(url:string,error=null)=>{
    return createAsyncThunk(
        'topic/fetchTopics',
        async  (_,{rejectWithValue,fulfillWithValue})=>{
            try {
                const response = await axios.get<T>(`${url}`);
                return fulfillWithValue(response.data);
            }catch (e){
                let finalError = error!==null?error:"Data loading fail, try later";
                return rejectWithValue(finalError)
            }
        }
    )
}