import React from 'react';
import "@/components/CustomElements/Button/CustomStyleButton.css"

interface CButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode;
}
const CustomButton = ({children = '', ...props}:CButton) => {
    return (
        <button {...props} className="customButton">
            {children}
        </button>
    );
};

export default CustomButton;