import {NextRequest, NextResponse} from "next/server";
import {TopicType} from "@/types/topicTypes";
import axios from "axios";

export async function GET (req:NextRequest, { params }: { params: { type: string } }){
    try {

        const axiosResponse = await axios.get<TopicType[]>(`http://localhost:5000/${params.type}`);
        return NextResponse.json(axiosResponse.data);
    } catch (error) {
        console.error(error);
        throw new Error("fail to fetch topics");
    }
}