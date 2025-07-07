import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPosts: (state, action) => {
      state.push(action.payload);
    },
    updatedPost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { addPosts, updatedPost } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
