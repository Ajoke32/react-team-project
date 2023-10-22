import { useEffect, useState, lazy, Suspense } from 'react';
import { fetchLearningStats } from '@/clientApi/learn/learningStatistic';
import { LearnedTime } from '@/types/learnedTime';
import LastLearningSessionsList from '@/components/Lists/LastLearningSessionsList';
import TimeTracker from '@/components/TimeTracker/TimeTracker';
import LearningChart from '@/components/Charts/LearningChart';
import TopicsColumnList from '@/components/Lists/TopicsColumnList';
import Loader from '@/components/Loaders/Loader';
import { useFetchStatus } from '@/hooks';

const Dashboard = () => {
    const {
        isLoading,
        error,
        data: learned,
    } = useFetchStatus<LearnedTime>({
        defaultPromise: fetchLearningStats,
        dependencies: [],
    });

    return isLoading ? (
        <Loader isLoading={isLoading} />
    ) : (
        <div
            className="grid grid-cols-3 grid-rows-2 place-content-center gap-5 p-5"
            style={{ gridTemplateRows: '260px' }}
        >
            <LastLearningSessionsList data={learned} />
            <TimeTracker />
            <LearningChart data={learned} />
            <TopicsColumnList />
            <div className="flex flex-col justify-center items-center gap-5 shadow-md shadow-sky-100 rounded-md p-5">
                <span>You are logged in as USERNAME</span>
                <div>
                    You can edit you account
                    <a
                        className="border-b-2 border-sky-300 text-sky-400"
                        href="/account/"
                    >
                        here
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 shadow-md shadow-sky-100 rounded-md p-5">
                <h2>Suggest you own topic</h2>
                <form className="flex flex-col gap-3 w-96" action="">
                    <input
                        className="outline-0 p-2 rounded-md border-2 border-slate-200"
                        type="text"
                        placeholder="Topic title"
                    />
                    <input
                        className="outline-0 p-2 rounded-md border-2 border-slate-200"
                        type="text"
                        placeholder="Topic description"
                    />
                    <textarea
                        className=" outline-0 p-2 rounded-md border-2 border-slate-200"
                        placeholder="Your wishes"
                    ></textarea>
                    <button className="w-full rounded-md p-1 bg-green-200">
                        Suggest
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
