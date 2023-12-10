import { TopicType } from '@/types/topicTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTopics } from '@/store/asyncThunks/fetchTopics';
import { loadingStatus } from '@/types/fetchStatus';



interface TopicState{
    topics:TopicType[],
    loading:loadingStatus,
    error:string|undefined
}

const initialState:TopicState = {
    topics:[],
    loading:'idle',
    error:undefined
}

export const topicSlice = createSlice({
    name:"topic",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTopics.pending,(state, action)=>{
            state.loading = 'pending'
        });
        builder.addCase(fetchTopics.fulfilled,(state, action:PayloadAction<TopicType[]>)=>{
            state.topics=action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(fetchTopics.rejected,(state, action)=>{
            state.loading='failed';
            state.error=action.error.message;
        })
    }
})

export const topicReducer = topicSlice.reducer;