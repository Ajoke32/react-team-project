import {TopicType} from "@/types/topicTypes";
import axios from "axios";


export  const fetchTopics = async (topicType:string)=>{
    const res = await axios.get<TopicType[]>(`/api/topics/${topicType}`);

    return res.data;
}