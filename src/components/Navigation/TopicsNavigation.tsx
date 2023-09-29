'use client'
import React, {useState} from 'react';
import {TopicDisplayType, TopicsNavType} from "@/types/topicTypes";

interface TopicsNavigationProps{
     handleTopicChange:(val:TopicsNavType)=>void
}

const initialState:TopicDisplayType[] = [{id:1,title:"First aid help",isActive:true,navType:TopicsNavType.FIRST_AID},
    {id:2,title:"Emergenies",isActive:false,navType:TopicsNavType.EMERGENCIES}]

const TopicsNavigation = ({handleTopicChange}:TopicsNavigationProps) => {


    const [topics,setTopics] = useState<TopicDisplayType[]>(initialState);

    function handleTopicClick(index:number){
        setTopics(topics.map((t,i)=>{
            if(i===index){
                t.isActive=true;
                handleTopicChange(t.navType);
                return t;
            }
            t.isActive=false;
            return t;
        }));
    }



    return (
        <div className="inline-flex flex-col  pl-5">
            <div className="flex items-center gap-3">
                {topics.map((t,index)=>{
                    return <span onClick={()=>handleTopicClick(index)}
                                 className={`cursor-pointer p-1 ${t.isActive?"text-sky-400":""}`} key={t.id}>{t.title}</span>
                })}
            </div>
        </div>
    );
};

export default TopicsNavigation;