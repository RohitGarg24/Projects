import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../redux/postsSlice";
const SinglePost = () => {
  const { postId } = useParams();
  const post = useSelector((state)=>selectPostById(state, postId));
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
      </Link>
    </article>
  );
};

export default SinglePost;
