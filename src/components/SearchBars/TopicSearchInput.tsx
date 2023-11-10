import React, { ChangeEvent } from 'react';

interface TopicSearchProps {
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TopicSearchInput = ({ onSearch }: TopicSearchProps) => {
    return (
        <input
            onChange={onSearch}
            type="text"
            placeholder="Enter topic title"
            className="outline-0 border-2 border-slate-200
         rounded-md p-1 hover:border-sky-300"
        />
    );
};

export default TopicSearchInput;
