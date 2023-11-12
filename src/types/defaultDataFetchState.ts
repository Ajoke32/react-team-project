import { loadingStatus } from '@/types/fetchStatus';


export interface DataFetchState<TData>{
    data:TData[],
    loading:loadingStatus,
    error:undefined|string
}