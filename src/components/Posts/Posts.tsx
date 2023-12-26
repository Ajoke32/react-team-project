'use client';
import React, {useEffect, useState} from 'react';
import '@/app/PostPage/Post.css';
import PostList from "@/components/Posts/PostList";
import CreateForm from "@/components/Posts/CreateForm";
import useSearchPosts from "@/components/CustomHook/useSearchPosts/useSearchPosts";
import Search from "@/components/Search/Search";
import {fetchPosts} from "@/clientApi/Posts/fetchPosts"
import {PostItems} from "@/types/PostTypes";


const Posts = () => {
    const [posts, setPosts] = useState<PostItems[]>([])

    const [error, setError] = useState<string>("")


    useEffect(()=>{
        fetchPosts().then(res=>{
            setPosts(res)
        }).catch((err:Error)=>{
            setError("Responses loading fail, try later");
        });
    }, [])

    const [searchText, handleSearch, filteredPosts] = useSearchPosts(posts);

    const createPost = (newPost:any) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post:any) =>{

        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <CreateForm create={createPost}/>
            <Search value={searchText} onChange={handleSearch} text={"Пошук поста"}/>
            {filteredPosts.length !== 0
                ? <PostList remove={removePost} posts={filteredPosts} title={"Список постів"}/>
                : <div style={{textAlign: 'center', fontSize: "25px"}}>Постів не найдено</div>
            }
        </div>

    );
};

export default Posts;