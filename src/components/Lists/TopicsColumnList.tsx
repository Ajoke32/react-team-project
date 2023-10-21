'use client';
import { useEffect, useState } from 'react';
import { TopicsNavType, TopicType } from '@/types/topicTypes';
import { fetchTopics } from '@/clientApi/topics/fetchTopics';
import { useFetchStatus } from '@/hooks';
import ConditionalRendering from '@/components/HOCs/ConditionalRendering';

const TopicsColumnList = () => {
    const [topics, setTopics] = useState<TopicType[]>([]);

    const {isLoading,error} = useFetchStatus<TopicType,string>({
        argsPromise:fetchTopics,
        setter:setTopics,
        getArgs:()=>"firstAid",
        dependencies:[]
    })

    return (
       <ConditionalRendering loading={isLoading} error={error}>
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
       </ConditionalRendering>
    );
};

export default TopicsColumnList;
