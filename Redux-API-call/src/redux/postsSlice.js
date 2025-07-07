import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState : [],
  reducers: {
    addPosts: (state, action) => {
      state.push(action.payload);
    }
}
    });

    export const { addPosts } = postsSlice.actions;
    export default postsSlice.reducer;