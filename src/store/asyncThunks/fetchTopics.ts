import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TopicType } from '@/types/topicTypes';

export const fetchTopics = createAsyncThunk(
    'topic/fetchTopics',
    async  (topicType:string,{rejectWithValue})=>{
        try {
            const response = await axios.get<TopicType[]>(`/api/topics/${topicType}`);
            return response.data;
        }catch (e:any){
            return rejectWithValue(e.message);
        }
    }
)