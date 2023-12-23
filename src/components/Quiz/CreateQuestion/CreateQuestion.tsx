import {useState, useRef} from "react";
import CreateAnswersForm from "@/components/Quiz/CreateQuestion/CreateAnswers/CreateAnswers";
import {QuestionDataType, QuestionFieldsType} from "@/types/quizTypes";
import {postQuestions} from "@/clientApi/questions/fetchQuestions";
import {SubmitHandler, useForm} from "react-hook-form";
import {questionSchema} from "@/zod/question/questionSchema";
import {zodResolver} from "@hookform/resolvers/zod";

const initQuestionData:QuestionDataType = {
    question:'',
    answers:[]
}

const CreateQuestionForm = ({setNeedUpdate}) => {

    const [topic, setTopic] = useState<string>("firstaid")
    const [questionData, setQuestionData] = useState<QuestionDataType>(initQuestionData)
    const [countRightAnswers, setCountRightAnswers] = useState<number>(0)
    const [answerId, setAnswerId] = useState<number>(1)
    const questionInput = useRef<HTMLInputElement | null>(null)

    const {register, handleSubmit, formState:{errors}} = useForm<QuestionFieldsType>(/*{resolver:zodResolver(questionSchema)}*/)

    const onSubmit:SubmitHandler<QuestionFieldsType> = (data)=> {
        const res = postQuestions(topic, {question: data.question, answers:data.answers})
        console.log(res)
    }

    console.log(errors)


    function focusFirstInput(){
        console.log(questionInput.current)
        questionInput.current?.focus()

    }

    const submitQuestion = (data:QuestionFieldsType)=>{
        console.log(data)
    }

    const getAnswer = (answer)=>{
        setQuestionData(prev=>({...prev, answers:[...prev.answers, {id:answerId, ...answer}]}))
        setAnswerId(answerId+1)

    }
    const checkTopic = (topic)=>{
        if (!topic)
            return topic === "First aid" ? setTopic("firstaid") : setTopic("emergency")
    }
    return(<details onToggle={focusFirstInput}>
            <summary className={'font-bold m-2'}>Create new question:</summary>
        <form onSubmit={handleSubmit(onSubmit)} className={"m-2 "}>

            <div>Choose topic: <select onChange={e=>checkTopic(e.target.value)}>
                <option >First aid</option>
                <option>Emergency</option>
            </select></div>
            <div >Enter question:
                <input {...register("question")} ref={questionInput}  className={"border border-gray-800 rounded my-2"} type={"text"} onChange={e=>setQuestionData(prev=>({...prev, question:e.target.value}))} value={questionData.question}/>
                {errors?.question && <span className=" ml-1 text-red-500">{errors.question.message}</span>}</div>
            <div >Enter count right answers:<input {...register('countRightAnswers', {valueAsNumber:true})}  className={"border border-gray-800 rounded my-2"} type={"number"} onChange={e=>setCountRightAnswers(Number(e.target.value))} value={countRightAnswers}/>
                {errors?.countRightAnswers && <span className=" ml-1 text-red-500">{errors.countRightAnswers.message}</span>}</div>
            <div className={"ml-4"}>Created answers:
            <div {...register("answers")}>
            {questionData.answers.length ? questionData.answers.map(answer=>(<li key={answer.id}>id:{answer.id}, content:{answer.content}, isTrue:{answer.isTrue.toString()}</li>)) : <p className={"ml-4"}>No created answers</p>}
                {errors?.answers && <span className=" ml-1 text-red-500">{errors.answers.message}</span>}</div>
                <CreateAnswersForm sendAnswer={answer=>getAnswer(answer)}/>
                 </div>
            <button onClick={e=>createQuestion(e)}  className={"bg-blue-400 rounded px-2 my-2 text-slate-200"}>Create question</button>
        </form></details>
    )

}

export default CreateQuestionForm