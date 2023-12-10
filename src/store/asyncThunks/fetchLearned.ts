import { createAsyncThunk } from '@reduxjs/toolkit';
import { LearnedTime } from '@/types/learnedTime';
import axios from 'axios';


export const fetchLearned = createAsyncThunk("learned/fetchLearned",
    async (arg,{rejectWithValue})=>{
        try {
            const response = await axios.get<LearnedTime[]>(`/api/learns`);
            return response.data;
        }catch (e:any){
            return rejectWithValue(e.message);
        }
    })