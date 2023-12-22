import {useState, useRef} from "react";
import CreateAnswersForm from "@/components/Quiz/CreateQuestion/CreateAnswers/CreateAnswers";
import {QuestionDataType} from "@/types/quizTypes";
import {postQuestions} from "@/clientApi/questions/fetchQuestions";

const initQuestionData:QuestionDataType = {
    question:'',
    answers:[]
}

const CreateQuestionForm = ({setNeedUpdate}) => {

    const [topic, setTopic] = useState<string>("firstaid")
    const [questionData, setQuestionData] = useState<QuestionDataType>(initQuestionData)
    const [answerId, setAnswerId] = useState<number>(1)
    const questionInput = useRef<HTMLInputElement | null>(null)

    function focusFirstInput(){
        console.log(questionInput.current)
        questionInput.current?.focus()

    }

    const createQuestion = (e)=>{
        e.preventDefault()
        const data = postQuestions(topic, questionData)
        console.log(data)
        setNeedUpdate(true)
        setQuestionData(initQuestionData)
    }
    const getAnswer = (answer)=>{
        setQuestionData(prev=>({...prev, answers:[...prev.answers, {id:answerId, ...answer}]}))
        setAnswerId(answerId+1)

    }
    const checkTopic = (topic)=>{
        if (!topic)
            return
        topic === "First aid" ? setTopic("firstaid") : setTopic("emergency")
    }
    return(<details onToggle={focusFirstInput}>
            <summary onClick={focusFirstInput} className={'font-bold m-2'}>Create new question:</summary>
        <form className={"m-2 "}>

            <div>Choose topic: <select onChange={e=>checkTopic(e.target.value)}>
                <option >First aid</option>
                <option>Emergency</option>
            </select></div>
            <div >Enter question:<input ref={questionInput} className={"border border-gray-800 rounded my-2"} type={"text"} onChange={e=>setQuestionData(prev=>({...prev, question:e.target.value}))} value={questionData.question}/></div>
            <div className={"ml-4"}>Created answers:

            {questionData.answers.length ? questionData.answers.map(answer=>(<li key={answer.id}>id:{answer.id}, content:{answer.content}, isTrue:{answer.isTrue.toString()}</li>)) : <p className={"ml-4"}>No created answers</p>}

                <CreateAnswersForm sendAnswer={answer=>getAnswer(answer)}/>
            </div>
            <button onClick={e=>createQuestion(e)} className={"bg-blue-400 rounded px-2 my-2 text-slate-200"}>Create question</button>
        </form></details>
    )

}

export default CreateQuestionForm