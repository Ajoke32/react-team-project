import {QuestionType, AnswersType} from "@/types/QuizTypes";
import {useState} from "react";
import styled from '@emotion/styled'



const QuestionTitle = styled.h2`
  font-size: 18px;
  font-weight:bold;
  
`

const QuestionContent = styled.p`
  font-family: Georgia;
  color: #151515;
  opacity: 0.9;
  padding: 5px;
  
  &:hover{
    opacity: 1;
    font-size: 18px;
  }
`

const CheckButton = styled.button`
    background: ${(props)=>(props.isPrimary ? 'lightblue' : 'cadetblue')};
    color: ${(props)=>(props.isPrimary ? 'black' : 'antiquewhite')};
    border: ${(props)=>(props.isPrimary ? 'solid 1px black'  : 0)};;
    border-radius: ${(props)=>(props.isPrimary ? '0px' : '20px')};
    padding: 4px;
`


const AnswerLi = styled.li`
    list-style: disc;
    margin-left: 3%;
    color: ${(props)=>(props.isNormalVision ? props.theme.color.forUsualHuman : props.theme.color.forDaltonik)};
    background: ${(props)=>(props.isNormalVision ? props.theme.background.forUsualHuman : props.theme.background.forDaltonik)};
  
    &:hover{
      border: #c7c7c7 1px solid;
      cursor: pointer;
      border-radius: 5px;
    }
`

const initialAnswer:AnswersType = {
    content: "",
    id: 0,
    isTrue: false
}

const Question = ({question}:{question:QuestionType}) => {

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
                <QuestionTitle className={"font-bold"}>Question #{question.id}</QuestionTitle>
                <div>
                    <QuestionContent>{question.question}</QuestionContent>
                    <ul>
                        {question.answers ? question.answers.map(answer=>(<AnswerLi isNormalVision={true} onClick={(e)=>{setAnswer(answer); focusedAnswer(e.target)}}  key={answer.id}>{answer.content} </AnswerLi>)):<div>No answers</div>}
                    </ul>
                    <CheckButton isPrimary={false} onClick={checkAnswer} >Check answer</CheckButton>
                </div>
            </div>
    )
}

export default Question