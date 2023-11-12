import { TopicType } from '@/types/topicTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTopics } from '@/store/asyncThunks/fetchTopics';
import { loadingStatus } from '@/types/fetchStatus';
import { setupDefaultCases } from '@/store/slices/defaultFetchReducerCase';
import { DataFetchState } from '@/types/defaultDataFetchState';



interface TopicState extends DataFetchState<TopicType>{

}

const initialState:TopicState = {
    data:[],
    loading:'idle',
    error:undefined
}

export const topicSlice = createSlice({
    name:"topic",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        setupDefaultCases<TopicType,TopicState,string,string,string>({
            builder:builder,
            pending:fetchTopics.pending,
            rejected:fetchTopics.rejected,
            fulfilled:fetchTopics.fulfilled
        });
    }
})

export const topicReducer = topicSlice.reducer;