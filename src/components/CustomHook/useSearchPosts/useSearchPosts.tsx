import { useState, useEffect } from 'react';

const UseSearchPosts = (posts:any) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e:any) => {
        setSearchText(e.target.value);
    }

    const filteredPosts = posts.filter((post:any) =>
        post.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return [searchText, handleSearch, filteredPosts];
};

export default UseSearchPosts;