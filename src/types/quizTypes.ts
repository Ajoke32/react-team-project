export type QuizType =  {
    questions: QuestionType[]
    lives: string[]
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

export type AnswerFieldsType = {
    answer:string,
    isTrue:boolean
}

export type CreateAnswerType = {
    content:"",
    isTrue:false

}

export type questionTopicType = {
    name:string,
    value:"firstaid" | "emergency"
}

export type QuizResponsesType = {
    responses:ResponseType[]
}

export type ResponseType = {
    senderName: string,
    content: string
}

export type QuestionFieldsType = {
    question: string
    countRightAnswers: number
    answers: AnswersType[]
}
