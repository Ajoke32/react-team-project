'use client'
import {QuizType, QuestionType} from "@/types/quizTypes";
import Question from "@/components/Quiz/Question/Question"
import React, {lazy, useEffect, useState, Suspense} from "react";
import {fetchQuestions} from "@/clientApi/questions/fetchQuestions";
import CreateQuestionForm from "@/components/Quiz/CreateQuestion/CreateQuestion";
import useToggleUpdate from "@/customHooks/useToggleUpdate";
//import Responses from "@/components/Quiz/Responds/Responses";

const Responses = lazy(()=>import("@/components/Quiz/Responds/Responses"))

const initialQuiz:QuizType = {
    questions: [],
    lives: [
        "/images/life.png",
        "/images/life.png",
        "/images/life.png",
    ]
}
const initialQuestion:QuestionType = {
    id: 0,
    question: "",
    answers: []
}

const Quiz = ({topic}:{topic:string}) => {

    const [quiz, setQuiz] = useState<QuizType>(initialQuiz)
    const [needQuizUpdate, setNeedUpdate] = useToggleUpdate(false)
    const [question, setQuestion] = useState<QuestionType>(initialQuestion)
    const [error, setError] = useState<string>("")


    const nextQuestionHandler = () => {
        console.log(question)
        console.log(quiz.questions[question.id])
        setQuestion(quiz.questions[question.id])


    }


    useEffect(()=>{
        fetchQuestions(topic).then(res=>{
            setQuiz(prev=>({...prev, questions:res}))
            setQuestion(res[0])
            setNeedUpdate(false)
            console.log("useEffect has worked")
        }).catch((err:Error)=>{
            console.log("Data loading fail, try later", err);
            setError("Quiz loading fail, try later");
        });
    }, [needQuizUpdate])


    if (error)
        return <div>{error}</div>
    return <div>
        <div className={"flex"}>{ quiz.lives ? quiz.lives.map(life=>(<img className="mx-1 w-14 h-14"  src={life} alt=""/>)) : null}</div>
        { question && question.id
            ? (<div>
                    <Question key={question.id} question={question}/>
                    <button onClick={nextQuestionHandler} className={"border-2 rounded bg-green-200 m-2 px-4"}>Next
                    </button>
                </div>
            )
            : (question == undefined
                    ? (<p>Sorry, there are no more questions</p>)
                    : (<p>Questions are loading...</p>)
            )
        }
        <CreateQuestionForm setNeedUpdate={setNeedUpdate}/>
        <Suspense fallback={<p>Responses are loading...</p>}>
            <Responses/>
        </Suspense>

    </div>

}

export default Quiz