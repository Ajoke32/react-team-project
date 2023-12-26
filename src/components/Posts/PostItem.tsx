import React from 'react';
import {PostItems} from "@/types/PostTypes";
import CustomButton from "@/components/CustomElements/Button/CustomButton";


interface PostItemProps{
    post:PostItems
    number?:number
    remove:any
}
const PostItem = ({post, number, remove}:PostItemProps) => {
    return (
        <div className="PostBlok">
        <div className="post">
            <div className="postText">
                <strong>{number}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="DeletePost">
                <CustomButton onClick={()=>{remove(post)}}>Видалити</CustomButton>
            </div>
        </div>
        </div>
    );
};

export default PostItem;