import {NextRequest, NextResponse} from "next/server";
import {TopicType} from "@/types/topicTypes";
import axios from "axios";
import posts from "@/components/Posts/Posts";

export async function GET (req:NextRequest, { params }: { params: { type: string } }){
    try {

        const axiosResponse = await axios.get<TopicType[]>(`http://localhost:5000/${params.type}`);
        return NextResponse.json(axiosResponse.data);
    } catch (error) {
        console.error(error);
        throw new Error("fail to fetch topics");
    }
}

export async function POST (req:NextRequest){
    try{
        const post = await req.json()
        const axiosResponse = await axios.post("http://localhost:5000/posts", post)
        return NextResponse.json(axiosResponse.data)
    }catch (error){
        throw new Error("Fail to make a POST request")
    }
}