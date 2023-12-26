import React from 'react';
import PostItem from "@/components/Posts/PostItem";
interface PostList{
    posts: any[]
    title: string
    remove: any
}

const PostList = ({posts, title, remove}: PostList) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: "25px"}}>{title}</h1>
            {posts.map((post, index)=>
                <PostItem remove={remove} number={index+1} post={post}/>
            )}
        </div>
    );
};

export default PostList;