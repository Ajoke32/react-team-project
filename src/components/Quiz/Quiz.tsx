'use client'
import {QuizType, QuestionType} from "@/types/quizTypes";
import Question from "@/components/Quiz/Question/Question"
import React, {useEffect, useState} from "react";
import {fetchQuestions} from "@/clientApi/questions/fetchQuestions";
import CreateQuestionForm from "@/components/Quiz/CreateQuestion/CreateQuestion";

const initialQuiz:QuizType = {
    questions: []
}
const initialQuestion:QuestionType = {
    id: 0,
    question: "",
    answers: []
}

const Quiz = ({topic}:{topic:string}) => {

    const [quiz, setQuiz] = useState<QuizType>(initialQuiz)
    const [needQuizUpdate, setNeedUpdate] = useState<boolean>(false)
    const [question, setQuestion] = useState<QuestionType>(initialQuestion)
    const [error, setError] = useState<string>("")


    const nextQuestionHandler = () => {
        setQuestion(quiz.questions[question.id])
    }

    console.log(needQuizUpdate)

    useEffect(()=>{
        fetchQuestions(topic).then(res=>{
            setQuiz({questions:res})
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
        { question && question.id ? (<div>
                <Question key={question.id} question = {question}  />
                <button onClick={nextQuestionHandler} className={"border-2 rounded bg-green-200 m-2 px-4"}>Next</button>
            </div>
        ) :(<p>Sorry, there are no more questions</p>)
        }
        <CreateQuestionForm setNeedUpdate={setNeedUpdate}/>

    </div>

}

export default Quiz