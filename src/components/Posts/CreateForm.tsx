import React, {useState, useRef, useEffect} from 'react';
import CustomInput from "@/components/CustomElements/Input/CustomInput";
import CustomButton from "@/components/CustomElements/Button/CustomButton";
import {POST} from "@/app/api/topics/[type]/route";
import {postPosts} from "@/clientApi/Posts/fetchPosts";
import {useRaf} from "react-use";

const CreateForm = ({create}:{create:any}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e:any) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        postPosts(newPost)
        create(newPost)
        setPost({title: '',body: ''})
    }



    return (
        <form className="flex flex-col">
            <CustomInput value={post.title}
                         onChange={e=>setPost({...post, title: e.target.value})}
                         type="text"
                         placeholder="Назва поста"
                         style={{width:"80%"}}
            />
            <CustomInput value={post.body}
                         onChange={e=>setPost({...post, body: e.target.value})}
                         type="text"
                         placeholder="Вміст поста"
                         style={{width:"80%"}}/>
            <CustomButton onClick={addNewPost} style={{width:"150px"}}>Створити пост</CustomButton>
        </form>
    );
};

export default CreateForm;