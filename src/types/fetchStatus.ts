interface FetchStatusType<T> {
    isLoading: boolean;
    error: string | null;
    data: T[];
}

export  type loadingStatus = 'idle' | 'pending' | 'succeeded' | 'failed';