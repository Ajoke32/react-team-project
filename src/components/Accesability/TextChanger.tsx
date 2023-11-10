import React, { useEffect, useState } from 'react';

const TextChanger = () => {
    const [size, setSize] = useState<string>('');

    useEffect(() => {
        const root = document.documentElement;
        root.style.fontSize = getComputedStyle(root).getPropertyValue(size);
    }, [size]);

    return (
        <div className="flex gap-3 items-center">
            <span>Text size:</span>
            <select
                style={{ color: 'black' }}
                onChange={(e) => {
                    setSize(e.target.value);
                }}
            >
                <option value="--font-size-sm">16</option>
                <option value="--font-size-md">18</option>
                <option value="--font-size-lg">20</option>
                <option value="--font-size-lgx">25</option>
            </select>
        </div>
    );
};

export default TextChanger;
