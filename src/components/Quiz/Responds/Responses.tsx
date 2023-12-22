import React, {useEffect, useState} from "react";
import AutoSizer from "react-virtualized-auto-sizer"
import {FixedSizeList as ResponsesList} from "react-window"
import {QuizResponsesType} from "@/types/quizTypes";
import UserResponseInfo from "@/components/Quiz/Responds/UserResponseInfo/UserResponseInfo";

const initialQuizResponses:QuizResponsesType = {
    responses: [
        {id:1, senderName:"User1", content:"helpful quiz"},
        {id:2, senderName:"User2", content:"pointless quiz"},
        {id:3, senderName:"User3", content:"helpful quiz"},
        {id:4, senderName:"User4", content:"pointless quiz"},
        {id:1, senderName:"User1", content:"helpful quiz"},
        {id:2, senderName:"User2", content:"pointless quiz"},
        {id:3, senderName:"User3", content:"helpful quiz"},
        {id:4, senderName:"User4", content:"pointless quiz"},
        {id:1, senderName:"User1", content:"helpful quiz"},
        {id:2, senderName:"User2", content:"pointless quiz"},
        {id:3, senderName:"User3", content:"helpful quiz"},
        {id:4, senderName:"User4", content:"pointless quiz"},
    ]
}

const Responses = () => {
    const [quizResponds, setQuizResponds] = useState<QuizResponsesType>(initialQuizResponses)

    return <AutoSizer>
        {({height, width})=>(
            <div className={"m-1"}>
                <div className={"text-lg font-bold"}>Users responds:</div>
                { quizResponds.responses
                    ?(
                        <ResponsesList
                            height={height}
                            width={width}
                            itemCount={quizResponds.responses.length}
                            itemSize={75}
                        >
                            {({index})=>
                                <UserResponseInfo
                                    key={index}
                                    response={quizResponds.responses[index]}
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