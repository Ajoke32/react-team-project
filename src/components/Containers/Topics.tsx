import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { TopicsNavType, TopicType } from '@/types/topicTypes';
import { fetchTopics } from '@/store/asyncThunks/fetchTopics';
import TopicsNavigation from '@/components/Navigation/TopicsNavigation';
import TopicSearchInput from '@/components/SearchBars/TopicSearchInput';
import TopicsList from '@/components/Lists/TopicsList';

const Topics = () => {

    const dispatch = useAppDispatch();

    const { topics,loading,error } = useTypedSelector(s=>s.topicReducer);

    const [filtered, setFiltered] = useState<TopicType[]>([]);

    const [topicType, setTopicType] = useState<TopicsNavType>(
        TopicsNavType.FIRST_AID,
    );

    useEffect(() => {
        const type:string = topicType === TopicsNavType.FIRST_AID ? 'firstAid' : 'emergency';
        dispatch(fetchTopics(type));
    }, [topicType]);

    useEffect(() => {
        if(loading==='succeeded'){
            setFiltered(topics);
        }
    }, [loading]);

    function handleTopicsTypeChange(value: TopicsNavType) {
        setTopicType(value);
    }

    function onTopicSearch(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value === '') {
            setFiltered(topics);
            return;
        }
        setFiltered(topics.filter((t) => t.title.includes(e.target.value)));
    }
    
    return (
        <div className="mt-16 flex flex-col gap-3">
            <div className="flex justify-between pr-10 pl-2">
                <TopicsNavigation
                    handleTopicChange={handleTopicsTypeChange}
                />
                <TopicSearchInput onSearch={onTopicSearch} />
            </div>
            <TopicsList loading={loading} error={error} data={filtered} />
        </div>
    );
};

export default Topics;
