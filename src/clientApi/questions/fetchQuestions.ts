import {QuestionType, QuestionDataType} from "@/types/quizTypes";
import axios from "axios";


export  const fetchQuestions = async (questionsTopic:string)=>{
    const res = await axios.get<QuestionType[]>(`/api/questions/${questionsTopic}`);

    return res.data;
}

export const postQuestions = async (questionsTopic:string, question:QuestionDataType)=>{
    const res = await axios.post(`/api/questions/${questionsTopic}`, question)

    return res
}