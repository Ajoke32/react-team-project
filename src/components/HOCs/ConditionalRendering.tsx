import { ReactNode, useEffect, useState } from 'react';
import ErrorGif from '@/components/Errors/ErrorGif';
import Loader from '@/components/Loaders/Loader';
import { loadingStatus } from '@/types/fetchStatus';
import { debounce } from 'chart.js/helpers';

interface ConditionalRenderingProps {
    loading: loadingStatus;
    error: string | undefined;
    children: ReactNode;
}

const ConditionalRendering = ({
    loading,
    error,
    children,
}: ConditionalRenderingProps) => {

    const [load,setLoad] = useState<boolean>(false);

    /*Для ситуацій, коли дані приходять дуже швидко. Якщо показувати лоадер в будь-якому випадку
    * то відбувається флешінг, тому що лоадер бистро з'являється та бистро зникає (помітив це через dev tools)
    * */
    useEffect(() => {
        let time = null;
        if(loading==='pending') {
            time = setTimeout(()=>{
                setLoad(true);
            },120)
        }else{
            setLoad(false);
        }
        return ()=>{
            clearTimeout(time!);
        }
    }, [loading]);

    if (error !== undefined) {
        return <ErrorGif error={error} />;
    }

    if (load) {
        return <Loader isLoading={loading} />;
    }

    return children;
};

export default ConditionalRendering;
