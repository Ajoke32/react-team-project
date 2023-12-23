"use client"
import Quiz from "@/components/Quiz/Quiz"
import {ThemeProvider} from "@emotion/react";

const visionTheme = {
    color:{
        forUsualHuman:"black",
        forDaltonik:"blue"
    },
    background:{
        forUsualHuman:"white",
        forDaltonik:"red"
    }
}

export default function QuizPage(){

    return (
        <ThemeProvider theme={visionTheme}>
            <div>
                <Quiz topic={"firstaid"}></Quiz>

            </div>
        </ThemeProvider>

    )
}