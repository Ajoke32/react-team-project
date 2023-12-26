import React from 'react';
import CustomInput from "@/components/CustomElements/Input/CustomInput";

interface Searh extends React.InputHTMLAttributes<HTMLInputElement>{
    text:string
}

function Search(props:Searh) {
    return (
        <CustomInput {...props}  type="text" placeholder={props.text} style={{width:"80%"}}/>
    );
}

export default Search;
