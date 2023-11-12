'use client';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TopicsNavType, TopicType } from '@/types/topicTypes';
import TopicsNavigation from '@/components/Navigation/TopicsNavigation';
import TopicSearchInput from '@/components/SearchBars/TopicSearchInput';
import ConditionalRendering from '@/components/HOCs/ConditionalRendering';
import { useFetchStatus } from '@/hooks/useFetchStatus';
import { useNotificationModal } from '@/hooks/useNotificationModal';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchTopics } from '@/store/asyncThunks/fetchTopics';
import { loadingStatus } from '@/types/fetchStatus';

const customWidth = 'calc(25% - 8px)';
const shadow = 'rgba(149, 157, 165, 0.2) 0 8px 24px';

interface TopicsListProps {
    loading: loadingStatus,
    error: undefined | string,
    data: TopicType[]
}

const TopicsList = ({ loading, data, error }: TopicsListProps) => {


    return (
        <ConditionalRendering loading={loading} error={error}>
            <div className='gap-2 p-5 flex items-center flex-wrap'>
                <div>{error}</div>
                {data.map((t) => {
                    return (
                        <div
                            key={t.id}
                            style={{
                                width: customWidth,
                                boxShadow: shadow
                            }}
                            className='cursor-pointer flex flex-col items-center rounded-md gap-2 p-2'
                        >
                            <div className='border-b-2 p-2 border-slate-200 w-full flex justify-center'>
                                <img
                                    className='mb-2'
                                    style={{
                                        height: '150px',
                                        width: '150px'
                                    }}
                                    src={`${
                                        t.imgLink === ''
                                            ? '/images/logo.png'
                                            : t.imgLink
                                    }`}
                                    alt=''
                                />
                            </div>
                            <span className='text-2xl'>{t.title}</span>
                            <span className='text-sm text-center text-slate-400'>
                                    {t.description}
                                </span>
                            <div className='w-full px-1 py-1 flex justify-between gap-3 items-center'>
                                <button
                                    style={{ color: 'white' }}
                                    className='p-1 grow bg-blue-400 rounded-xl hover:bg-blue-500'
                                >
                                    Learn now
                                </button>
                                <img
                                    className='p-1 hover:bg-purple-300 rounded-md'
                                    style={{
                                        width: '30px',
                                        height: '30px'
                                    }}
                                    src='/images/bookmark.png'
                                    alt=''
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </ConditionalRendering>
    );
};

export default TopicsList;
