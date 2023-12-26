import React from 'react';
import Profile from "@/components/Profile/Profile";

interface MessageProps {
    sender: string;
    recipient: string;
    text: string;
}

function Message({ sender, recipient, text }: MessageProps) {
    return (
        <div>
            <h3>From: {sender}</h3>
            <h3>To: {recipient}</h3>
            <p>{text}</p>
        </div>
    );
}


export default Message;