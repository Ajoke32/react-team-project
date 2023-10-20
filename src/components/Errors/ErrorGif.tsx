import React from 'react';

const ErrorGif = ({error}:{error:string}) => {
    return (
        <div className="flex items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img style={{width:"200px",height:"200px"}} src="/images/err.gif" alt="err"/>
            <span className="font-medium text-pink-400 text-base">{error}</span>
        </div>
    );
};

export default ErrorGif;
