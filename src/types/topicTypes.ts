import { TopicInfer } from '@/zod/topics/topicSchema';

export interface TopicType extends TopicInfer {
    id: number;
}

export type TopicDisplayType = {
    id: number;
    title: string;
    isActive: boolean;
    navType: TopicsNavType;
};

export enum TopicsNavType {
    FIRST_AID = 'FIRST_AID',
    EMERGENCIES = 'EMERGENCIES',
}
