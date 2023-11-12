import { useEffect, useState } from 'react';
import { FetchStatusType } from '@/types/fetchStatus';

interface useFetchParams<T, TArgs = undefined> {
    argsPromise?: (args: TArgs) => Promise<T[]>;
    dependencies: any[];
    onSuccess?: (data: T[]) => void;
    onError?: () => void;
    getArgs?: () => TArgs;
    defaultPromise?: () => Promise<T[]>;
}

export function useFetchStatus<T, K = undefined>({
    argsPromise,
    defaultPromise,
    onError,
    onSuccess,
    getArgs,
    dependencies,
}: useFetchParams<T, K>): FetchStatusType<T> {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T[]>([]);
    if (defaultPromise == undefined && argsPromise == undefined) {
        throw new Error('At least one promise must be passed to function');
    }

    useEffect(() => {
        let p: Promise<T[]>;
        if (defaultPromise !== undefined) {
            p = defaultPromise();
        } else {
            const args = getArgs!();
            p = argsPromise!(args);
        }

        p.then((res) => {
            setLoading(false);
            setData(res);
            if (onSuccess) {
                onSuccess(res);
            }
        }).catch((err) => {
            setError('data loading fail');
            setLoading(false);
            if (onError) {
                onError();
            }
        });
    }, dependencies);

    return {
        isLoading: loading,
        error: error,
        data: data,
    };
}
