import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SinglePost = () => {
    const { postId } = useParams();
    const post = useSelector((state) => state?.posts.find(post => post.id === postId));
    if (!post) {
        return <div>Post not found</div>;
    }
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p className="post-content">{post.content}</p>
    </article>
  )
}

export default SinglePost