import {ResponseType} from "@/types/quizTypes";

const UserResponseInfo = ({response}: {response:ResponseType}) => {

    return (
        <div className={"m-2 p-2 border"}>
            <div className={"font-semibold"}>{response.senderName}</div>
            <p>{response.content}</p>
        </div>
    )
}

export default UserResponseInfo