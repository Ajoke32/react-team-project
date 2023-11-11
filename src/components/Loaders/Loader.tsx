import React, { useEffect, useState } from 'react';
import { loadingStatus } from '@/types/fetchStatus';

const Loader = ({ isLoading }: { isLoading: loadingStatus }) => {
    const [animation, setAnimation] = useState('translateY(0)');
    const [flag, setFlag] = useState(true);


    useEffect(() => {
        let timeOut = null;
        timeOut = setTimeout(() => {
            if (flag) {
                setAnimation('translateY(0)');
                setFlag(false);
            } else {
                setAnimation('translateY(15px)');
                setFlag(true);
            }

        }, 500);

        return ()=>{
            clearTimeout(timeOut!);
        }
    }, []);

    return (
        <div className="flex justify-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
                style={{ transform: animation, transition: '0.4s' }}
                className="w-4 h-4 bg-blue-300 rounded-2xl"
            ></div>
            <div
                style={{ transform: animation, transition: '0.6s' }}
                className="w-4 h-4 bg-blue-300 rounded-2xl"
            ></div>
            <div
                style={{ transform: animation, transition: '0.9s' }}
                className="w-4 h-4 bg-blue-300 rounded-2xl"
            ></div>
        </div>
    );
};

export default Loader;
