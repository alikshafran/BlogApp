import React from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { useState } from 'react';



const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'',  body:''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'',  body:''})
    
       }
 
       
    return(
        <form>
        <MyInput 
        onChange={e => setPost({...post, title: e.target.value})}
        value={post.title}
        type="text" 
        placeholder="Название поста" 
        />
        <MyInput 
         onChange={e => setPost({...post, body: e.target.value})}
         value={post.body}
        type="text" 
        placeholder="Описание поста"
        />
        <MyButton style={{ backgroundColor: '#ce978b'}} onClick={addNewPost}> Опубликовать </MyButton>

      </form>
    );
};

export default PostForm;