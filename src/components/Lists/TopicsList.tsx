'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { TopicsNavType, TopicType } from '@/types/topicTypes';
import axios from 'axios';
import TopicsNavigation from '@/components/Navigation/TopicsNavigation';
import TopicSearchInput from '@/components/SearchBars/TopicSearchInput';
import { fetchTopics } from '@/clientApi/topics/fetchTopics';
import Loader from '@/components/Loaders/Loader';
import ErrorGif from '@/components/Errors/ErrorGif';

const customWidth = 'calc(25% - 8px)';
const shadow = 'rgba(149, 157, 165, 0.2) 0 8px 24px';
const TopicsList = () => {
    const [isLoading, setLoading] = useState<boolean>(true);

    const [topics, setTopics] = useState<TopicType[]>([]);

    const [filtered, setFiltered] = useState<TopicType[]>([]);

    const [topicType, setTopicType] = useState<TopicsNavType>(
        TopicsNavType.FIRST_AID,
    );

    const [error, setError] = useState<string>('');

    useEffect(() => {
        const type =
            topicType === TopicsNavType.FIRST_AID ? 'firstAid' : 'emergency';

        fetchTopics(type)
            .then((res) => {
                setTopics(res);
                setFiltered(res);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError('Data loading fail, try later');
                setLoading(false);
            });
    }, [topicType]);

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

    if (error !== '') {
        return <ErrorGif error={error} />;
    }

    if (isLoading) {
        return <Loader isLoading={isLoading} />;
    }

    return topics.length !== 0 ? (
        <div className="mt-16 flex flex-col gap-3">
            <div className="flex justify-between pr-10 pl-2">
                <TopicsNavigation handleTopicChange={handleTopicsTypeChange} />
                <TopicSearchInput onSearch={onTopicSearch} />
            </div>
            <div className="gap-2 p-5 flex items-center flex-wrap">
                <div>{error}</div>
                {filtered.map((t) => {
                    return (
                        <div
                            key={t.id}
                            style={{ width: customWidth, boxShadow: shadow }}
                            className="cursor-pointer flex flex-col items-center rounded-md gap-2 p-2"
                        >
                            <div className="border-b-2 p-2 border-slate-200 w-full flex justify-center">
                                <img
                                    className="mb-2"
                                    style={{ height: '150px', width: '150px' }}
                                    src={`${
                                        t.imgLink === ''
                                            ? '/images/logo.png'
                                            : t.imgLink
                                    }`}
                                    alt=""
                                />
                            </div>
                            <span className="text-2xl">{t.title}</span>
                            <span className="text-sm text-center text-slate-400">
                                {t.description}
                            </span>
                            <div className="w-full px-1 py-1 flex justify-between gap-3 items-center">
                                <button
                                    style={{ color: 'white' }}
                                    className="p-1 grow bg-blue-400 rounded-xl hover:bg-blue-500"
                                >
                                    Learn now
                                </button>
                                <img
                                    className="p-1 hover:bg-purple-300 rounded-md"
                                    style={{ width: '30px', height: '30px' }}
                                    src="/images/bookmark.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    ) : null;
};

export default TopicsList;
