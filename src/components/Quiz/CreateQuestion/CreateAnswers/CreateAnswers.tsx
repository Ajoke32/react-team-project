import {useState} from "react";
import {AnswerFieldsType, CreateAnswerType} from "@/types/quizTypes";
import {useForm} from "react-hook-form";


const initAnswer:CreateAnswerType = {
    content: "",
    isTrue: false
}

const CreateAnswersForm = (props) => {

    const [answer, setAnswer] = useState<object>(initAnswer)
    const {register, setError, formState:{errors}} = useForm<AnswerFieldsType>()




    const sendAnswer = (e)=>{
        e.preventDefault()
        if (answer.content){
            setAnswer(initAnswer)
            props.sendAnswer(answer)
        }
        else{
            setError("answer", {type:"required", message:"Answer is required"})
        }

    }


    return(
            <div>
                <div>Enter the answer content: <input {...register('answer',{required:"Answer is required!!"})} type={"text"} className={"border border-gray-800 rounded"} onChange={e=>setAnswer(prev=>({ ...prev, content:e.target.value}))}  value={answer.content}/> {errors?.answer && <span className=" ml-1 text-red-500">{errors.answer.message}</span>}</div>

                <div>Is it true:<input className={"border border-gray-800 rounded"} type={"checkbox"} onChange={e=>setAnswer(prev => ({...prev, isTrue:e.target.checked}))} checked={answer.isTrue}/></div>
                <button onClick={e=>sendAnswer(e)} className={"bg-blue-400 rounded px-2 my-2 text-slate-200"}>Create Answer</button>
            </div>
    )
}

export default CreateAnswersForm