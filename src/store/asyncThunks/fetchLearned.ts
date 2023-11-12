import { LearnedTime } from '@/types/learnedTime';
import { createDefaultFetchAsyncThunk } from '@/store/asyncThunks/defaultFetchThunk';



export const fetchLearned = createDefaultFetchAsyncThunk<LearnedTime[]>('/api/learns')
