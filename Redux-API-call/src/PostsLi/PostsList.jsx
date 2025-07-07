import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts } from "../redux/postsSlice";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts?.map((post) => (
    <article className="post-excerpt" key={post?.id}>
      <Link to={`/posts/${post.id}`}>
        <h3>{post?.title}</h3>
      </Link>
      <p className="post-content">{post?.content?.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
