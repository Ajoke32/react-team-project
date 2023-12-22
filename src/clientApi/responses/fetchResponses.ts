import {ResponseType} from "@/types/quizTypes";
import axios from "axios";


export  const fetchResponses = async ()=>{
    const res = await axios.get<ResponseType[]>(`/api/questions/responses`);

    return res.data;
}