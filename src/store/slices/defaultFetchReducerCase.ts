import { ActionReducerMapBuilder, Draft, PayloadAction } from '@reduxjs/toolkit';
import {
    AsyncThunkFulfilledActionCreator, AsyncThunkPendingActionCreator,
    AsyncThunkRejectedActionCreator
} from '@reduxjs/toolkit/src/createAsyncThunk';
import { DataFetchState } from '@/types/defaultDataFetchState';



interface CasePropsBase<TData,TState extends DataFetchState<TData>,TFulfilledArg=void,TReject=void,TPending=void>{
    builder: ActionReducerMapBuilder<TState>,
    rejected: AsyncThunkRejectedActionCreator<TReject>,
    fulfilled: AsyncThunkFulfilledActionCreator<TData[],TFulfilledArg>,
    pending: AsyncThunkPendingActionCreator<TPending>
}
export const setupDefaultCases =
    <TData,TState extends DataFetchState<TData>,TArgs=void,TReject=void,TPending=void>({builder,rejected,fulfilled,pending}:CasePropsBase<TData,TState, TArgs,TReject,TPending>)=>{
        builder.addCase(pending,(state)=>{
            state.loading = 'pending'
        });
        builder.addCase(fulfilled,(state, action)=>{
            state.data=action.payload as Draft<TData[]>;
            state.loading = 'succeeded';
        });
        builder.addCase(rejected,(state, action)=>{
            state.loading='failed';
            state.error=action.payload as string;
        })
}