import React from 'react';
import "@/components/CustomElements/Input/CustomStyleInput.css"

interface CInput extends React.InputHTMLAttributes<HTMLInputElement>{

}

const CustomInput = (props:CInput) => {
    return (
        <input className="customInput" {...props}/>
    );
};

export default CustomInput;