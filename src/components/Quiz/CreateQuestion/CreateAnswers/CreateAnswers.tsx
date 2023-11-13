import {useState} from "react";
import {CreateAnswerType} from "@/types/quizTypes";


const initAnswer:CreateAnswerType = {
    content: "",
    isTrue: false
}

const CreateAnswersForm = (props) => {

    const [answer, setAnswer] = useState<object>(initAnswer)

    const createAnswer = (e)=>{
        e.preventDefault()
        setAnswer(initAnswer)
        return answer
    }

    return(
            <div>
                <div>Enter the answer content: <input type={"text"} className={"border border-gray-800 rounded"} onChange={e=>setAnswer(prev=>({ ...prev, content:e.target.value}))}  value={answer.content}/></div>

                <div>Is it true:<input className={"border border-gray-800 rounded"} type={"checkbox"} onChange={e=>setAnswer(prev => ({...prev, isTrue:e.target.checked}))} checked={answer.isTrue}/></div>
                <button onClick={e=>props.sendAnswer(createAnswer(e))} className={"bg-blue-400 rounded px-2 my-2 text-slate-200"}>Create Answer</button>
            </div>
    )
}

export default CreateAnswersForm