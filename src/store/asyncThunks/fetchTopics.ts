import { TopicType } from '@/types/topicTypes';
import {
    createParamsDefaultFetchAsyncThunk
} from '@/store/asyncThunks/defaultFetchThunk';



export const fetchTopics = createParamsDefaultFetchAsyncThunk<TopicType[],string>('/api/topics/')





