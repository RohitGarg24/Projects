import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState : [],
  reducers: {
    addPosts: (state, action) => {
      state.push(action.payload);
    },
    updatedPost: (state, action) => {
        const { id, title, content } = action.payload;
        const existingPost = state.find(post => post.id === id);
        if (existingPost) {
            existingPost.title = title;
            existingPost.content = content;
        }
    }
    }
});

    export const { addPosts, updatedPost } = postsSlice.actions;
    export default postsSlice.reducer;