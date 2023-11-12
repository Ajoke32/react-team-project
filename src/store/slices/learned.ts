import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LearnedTime } from '@/types/learnedTime';
import { loadingStatus } from '@/types/fetchStatus';
import { fetchLearned } from '@/store/asyncThunks/fetchLearned';
import { setupDefaultCases } from '@/store/slices/defaultFetchReducerCase';
import { TopicType } from '@/types/topicTypes';
import { fetchTopics } from '@/store/asyncThunks/fetchTopics';
import { DataFetchState } from '@/types/defaultDataFetchState';



interface LearnedState extends DataFetchState<LearnedTime>{

}

const initialState:LearnedState={
    data:[],
    loading:'idle',
    error:undefined
}
export const learnedSlice = createSlice({
    name:"learned",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        setupDefaultCases<LearnedTime,LearnedState>({
            builder:builder,
            pending:fetchLearned.pending,
            rejected:fetchLearned.rejected,
            fulfilled:fetchLearned.fulfilled
        });
    }
})

export const learnedReducer = learnedSlice.reducer;