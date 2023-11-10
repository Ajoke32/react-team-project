import React from 'react';
import { LearnedTime } from '@/types/learnedTime';
import moment from 'moment/moment';
import List from 'react-virtualized/dist/commonjs/List';

const LastLearningSessionsList = ({ data }: { data: LearnedTime[] }) => {
    return (
        <div className="flex flex-col gap-3 items-center  shadow-md shadow-sky-100 rounded-md p-5  overflow-auto">
            <h2 className="text-center">Your work sessions</h2>

            <List
                width={420}
                height={500}
                rowCount={data.length}
                style={{ overflow: 'scroll', padding: '5px' }}
                rowHeight={50}
                rowRenderer={({ key, index }) => {
                    const i = data[index];
                    const duration = moment.duration(
                        moment(i.endDate).diff(i.startDate),
                    );
                    return (
                        <div
                            key={i.id}
                            className="flex mt-2 rounded-md justify-between p-2 bg-blue-100"
                        >
                            <div>
                                {moment(i.startDate).format('hh:mm:ss')} -{' '}
                                {moment(i.endDate).format('hh:mm:ss')}
                            </div>
                            <div>
                                {moment
                                    .utc(duration.asMilliseconds())
                                    .format('HH:mm:ss')}
                            </div>
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default LastLearningSessionsList;
