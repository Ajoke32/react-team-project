export type QuizType =  {
    questions: QuestionType[]
}

export type QuestionType = {
    id: number
    question: string
    answers: AnswersType[]
}

export type QuestionDataType = {
    question: string
    answers: AnswersType[]
}

export type AnswersType = {
    id: number
    content: string
    isTrue: boolean
}

export type CreateAnswerType = {
    content:"",
    isTrue:false

}

export type questionTopicType = {
    name:string,
    value:"firstaid" | "emergency"
}


