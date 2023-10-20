import React from 'react';

/*Компонент для трекінгу часу, проведено за навчанням на сайті (буде реалізовано пізніше)*/
const TimeTracker = () => {
    return (
        <div className="flex flex-col gap-3 shadow-md shadow-sky-100 rounded-md p-5 justify-center items-center">
            <div className="rounded-full p-2 bg-purple-300 cursor-pointer">
                <img style={{height:"25px",width:"25px",marginLeft:"3px"}} src="/images/play.png" alt="start"/>
            </div>
            <span>00:00:00</span>
        </div>
    );
};

export default TimeTracker;
