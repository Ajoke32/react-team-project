'use client';
import { useEffect, useState } from 'react';
import { TopicsNavType, TopicType } from '@/types/topicTypes';
import { fetchTopics } from '@/clientApi/topics/fetchTopics';

const TopicsColumnList = () => {
    const [topics, setTopics] = useState<TopicType[]>([]);
    useEffect(() => {
        fetchTopics('firstAid')
            .then((res) => {
                setTopics(res);
            })
            .catch((err: Error) => {
                console.log('errors');
            });
    }, []);
    return (
        <div className="flex flex-col gap-2 items-center  shadow-md shadow-sky-100 rounded-md p-5">
            <h2>Explore another topics</h2>
            {topics.map((t) => {
                return (
                    <div
                        key={t.id}
                        className="flex mt-2 cursor-pointer rounded-md justify-between p-2 bg-purple-100 w-96"
                    >
                        <div>
                            <a href={`topics/${t.id}`}>{t.title}</a>
                        </div>
                        <div>&rarr;</div>
                    </div>
                );
            })}
        </div>
    );
};

export default TopicsColumnList;
