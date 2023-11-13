import {NextRequest, NextResponse} from "next/server";
import {QuestionDataType, QuestionType} from "@/types/quizTypes";
import axios from "axios";

export async function GET (req:NextRequest, { params }: { params: { type: string } }){
    try {

        const axiosResponse = await axios.get<QuestionType[]>(`http://localhost:4000/${params.type}`);
        return NextResponse.json(axiosResponse.data);
    } catch (error) {
        console.error(error);
        throw new Error("fail to fetch topics");
    }
}

export async function POST (req:NextRequest, {params}:{params:{type:string}}){
    try{
        const question = await req.json()
        const axiosResponse = await axios.post(`http://localhost:4000/${params.type}`, question)
        return NextResponse.json(axiosResponse.data)
    }catch (error){
        console.log(error)
        throw new Error("Fail to make a POST request")
    }
}