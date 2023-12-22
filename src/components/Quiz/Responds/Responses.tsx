import React, {useEffect, useState} from "react";
import AutoSizer from "react-virtualized-auto-sizer"
import {FixedSizeList as ResponsesList} from "react-window"
import {QuizResponsesType} from "@/types/quizTypes";
import UserResponseInfo from "@/components/Quiz/Responds/UserResponseInfo/UserResponseInfo";
import {fetchResponses} from "@/clientApi/responses/fetchResponses";

const initialQuizResponses:QuizResponsesType = {
    responses: []
}

const Responses = () => {
    const [quizResponses, setQuizResponses] = useState<QuizResponsesType>(initialQuizResponses)
    const [error, setError] = useState<string>("")

    useEffect(()=>{
        fetchResponses().then(res=>{
            setQuizResponses({responses:res})
            console.log("useEffect has worked")
        }).catch((err:Error)=>{
            console.log("Data responses loading fail, try later", err);
            setError("Responses loading fail, try later");
        });
    }, [])

    if (error)
        return <div>{error}</div>

    return <AutoSizer>
        {({height, width})=>(
            <div className={"m-1"}>
                <div className={"text-lg font-bold"}>Users responds:</div>
                { quizResponses.responses
                    ?(
                        <ResponsesList
                            height={height}
                            width={width}
                            itemCount={quizResponses.responses.length}
                            itemSize={75}
                        >
                            {({index})=>
                                <UserResponseInfo
                                    key={index}
                                    response={quizResponses.responses[index]}
                                />
                            }
                        </ResponsesList>

                    )
                    :(<p>There are no responds :(</p>)
                }
            </div>
        )}
    </AutoSizer>


}

export default Responses