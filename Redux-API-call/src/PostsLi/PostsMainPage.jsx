import React from 'react'
import AddPostForm from './addPostForm'
import PostsList from './postsList'

const PostsMainPage = () => {
  return (
    <div className="App1">
      <AddPostForm />
      <PostsList />
    </div>
  )
}

export default PostsMainPage