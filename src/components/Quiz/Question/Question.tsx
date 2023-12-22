import {QuestionType, AnswersType} from "@/types/QuizTypes";
import {useState} from "react";



const Question = ({question}:{question:QuestionType}) => {

    const initialAnswer:AnswersType = {
        content: "",
        id: 0,
        isTrue: false
    }

    const [answer, setAnswer] = useState<AnswersType>(initialAnswer)

    const checkAnswer = () => {
        const listItems = document.querySelectorAll('li')
        listItems.forEach(function (li){
            if (li.classList.contains('selected')) {
                answer.isTrue? li.style.color = "green" : li.style.color = "red"
            }
            else
                li.style.color = "black"
        })

    }

    const focusedAnswer = (e) => {
        const listItems = document.querySelectorAll('li')
        listItems.forEach(function (li){
            if (li == e){
                li.classList.add('selected')
            }
            else
                li.classList.remove('selected')
        })
    }

    return (
        <div className={"m-2 p-2 border"}>
            <h2 className={"font-bold"}>Question #{question.id}</h2>
            <div>
                <p className={"p-2"}>{question.question}</p>
                <ul>
                    {question.answers ? question.answers.map(answer=>(<li onClick={e=>{setAnswer(answer); focusedAnswer(e.target)}}  className={"list-disc ml-4 hover:border cursor-pointer"} key={answer.id}>{answer.content} <div></div></li>)):<div>No answers</div>}
                </ul>
                <button onClick={checkAnswer} className={"border rounded-xl p-1 mt-2 bg-sky-200 hover:border-2 hover:border-blue-400"} >Check answer</button>
            </div>
        </div>
    )
}

export default Question