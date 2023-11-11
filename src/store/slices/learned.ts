import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LearnedTime } from '@/types/learnedTime';
import { loadingStatus } from '@/types/fetchStatus';
import { fetchLearned } from '@/store/asyncThunks/fetchLearned';



interface LearnedState{
    learned:LearnedTime[],
    loading:loadingStatus,
    error:string|undefined
}

const initialState:LearnedState={
    learned:[],
    loading:'idle',
    error:undefined
}
export const learnedSlice = createSlice({
    name:"learned",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchLearned.pending,(state, action)=>{
            state.loading = 'pending'
        });
        builder.addCase(fetchLearned.fulfilled,(state, action:PayloadAction<LearnedTime[]>)=>{
            state.learned=action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(fetchLearned.rejected,(state, action)=>{
            state.loading='failed';
            state.error=action.error.message;
        })
    }
})

export const learnedReducer = learnedSlice.reducer;