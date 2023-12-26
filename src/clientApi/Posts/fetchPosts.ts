import {PostItems} from "@/types/PostTypes";
import axios from "axios";


export  const fetchPosts = async ()=>{
    const res = await axios.get<PostItems[]>(`/api/topics/posts`);

    return res.data;
}

export const postPosts = async (post:PostItems)=>{
    const res = await axios.post("/api/topics/posts", post)

    return res
}
