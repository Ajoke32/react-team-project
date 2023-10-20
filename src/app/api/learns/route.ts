import {NextRequest, NextResponse} from "next/server";
import axios from "axios";
import {LearnedTime} from "@/types/learnedTime";

export async function GET (req:NextRequest,res:NextResponse){
    try {

        const axiosResponse = await axios.get<LearnedTime[]>(`http://localhost:5000/learned`);
        return NextResponse.json(axiosResponse.data);
    } catch (error) {
        console.error(error);
        throw new Error("fail to fetch topics");
    }
}