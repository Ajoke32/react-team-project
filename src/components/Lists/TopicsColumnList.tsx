'use client';
import ConditionalRendering from '@/components/HOCs/ConditionalRendering';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const TopicsColumnList = () => {

    const {topics,loading:isLoading,error} = useTypedSelector(s=>s.topicReducer);

    return (
        <ConditionalRendering loading={isLoading} error={error}>
            <div className="flex flex-col gap-2 items-center  shadow-md shadow-sky-100 rounded-md p-5">
                <h2>Explore another topics</h2>
                {topics.map((t) => {
                    return (
                        <div
                            key={t.id}
                            className="flex mt-2 cursor-pointer rounded-md justify-between p-2 bg-purple-100 w-96"
                        >
                            <div>
                                <a href={`topics/${t.id}`}>{t.title}</a>
                            </div>
                            <div>&rarr;</div>
                        </div>
                    );
                })}
            </div>
        </ConditionalRendering>
    );
};

export default TopicsColumnList;
