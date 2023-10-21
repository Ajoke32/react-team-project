import React, { useEffect, useState } from 'react';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    ChartData,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { LearnedTime } from '@/types/learnedTime';
import { fetchLearningStats } from '@/clientApi/learn/learningStatistic';
import moment from 'moment/moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'You learning by days',
        },
    },
};
const LearningChart = ({ data: items }: { data: LearnedTime[] }) => {
    const labels: string[] = [];
    const values: number[] = [];
    const [data, setData] = useState<
        ChartData<'bar', (number | [number, number] | null)[], string>
    >({ labels: [], datasets: [] });

    useEffect(() => {
        createLabels(items);
    }, []);
    function createLabels(items: LearnedTime[]) {
        items.forEach((i) => {
            labels.push(moment(i.startDate).format('DD/MM/YYYY'));
            values.push(moment(i.endDate).diff(i.startDate, 'minutes'));
        });
        setData({
            labels: labels,
            datasets: [
                {
                    label: 'statistic',
                    data: labels.map((i, index) => values[index]),
                    backgroundColor: '#a2d2ff',
                },
            ],
        });
    }
    return (
        <div className="relative shadow-md shadow-sky-100 rounded-md p-5">
            <Bar data={data} options={options} />
        </div>
    );
};

export default LearningChart;
