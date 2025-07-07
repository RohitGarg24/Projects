import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPostById, updatedPost } from "../redux/postsSlice";

const EditPostForm = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!post) {
    return <div>Post not found</div>;
  }
  const onSavePostClicked = (e) => {
    e.preventDefault();
    const postTitle = e.target.postTitle.value;
    const postContent = e.target.postContent.value;
    if (postTitle && postContent) {
      dispatch(
        updatedPost({ id: postId, title: postTitle, content: postContent })
      );
      e.target.reset(); // Reset the form after submission
      navigate(`/posts/${postId}`); // Navigate back to the single post view
    }
  };
  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          defaultValue={post.title}
          required
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue={post.content}
          required
        />

        <button>Save Post</button>
      </form>
    </section>
  );
};

export default EditPostForm;
