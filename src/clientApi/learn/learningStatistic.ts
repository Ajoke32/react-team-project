import axios from 'axios';
import { TopicType } from '@/types/topicTypes';
import { LearnedTimeInfer } from '@/zod/learn/learnedTimeSchema';
import { LearnedTime } from '@/types/learnedTime';

export const fetchLearningStats = async () => {
    const res = await axios.get<LearnedTime[]>(`/api/learns`);
    return res.data;
};
