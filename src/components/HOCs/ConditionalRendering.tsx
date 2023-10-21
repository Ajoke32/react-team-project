import { ReactNode } from 'react';
import ErrorGif from '@/components/Errors/ErrorGif';
import Loader from '@/components/Loaders/Loader';

interface ConditionalRenderingProps {
    loading: boolean;
    error: string | null;
    children: ReactNode;
}

const ConditionalRendering = ({ loading, error, children }: ConditionalRenderingProps) => {
    if (error !== null) {
        return <ErrorGif error={error} />;
    }

    if (loading) {
        return <Loader isLoading={loading} />;
    }

    return (
        children
    );
};

export default ConditionalRendering;

