import React from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addPosts } from '../redux/postsSlice';
const AddPostForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const postTitle = e.target.postTitle.value;
        const postContent = e.target.postContent.value;
        console.log(postTitle, postContent);
        const newPost ={
            id: nanoid(),
            title: postTitle,
            content: postContent
        }
        dispatch(addPosts(newPost));
        e.target.reset(); // Reset the form after submission
    }


  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="postTitle" defaultValue="" required />

        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
          required
        />
        <button>Save Post</button>
      </form>
    </div>
  );
}

export default AddPostForm