import LastLearningSessionsList from '@/components/Lists/LastLearningSessionsList';
import TimeTracker from '@/components/TimeTracker/TimeTracker';
import LearningChart from '@/components/Charts/LearningChart';
import TopicsColumnList from '@/components/Lists/TopicsColumnList';
import Loader from '@/components/Loaders/Loader';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchLearned } from '@/store/asyncThunks/fetchLearned';


const Dashboard = () => {
    const {learned,loading:isLoading} = useTypedSelector(s=>s.learnedReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLearned());
    }, []);


    return isLoading==='pending' ? (
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
