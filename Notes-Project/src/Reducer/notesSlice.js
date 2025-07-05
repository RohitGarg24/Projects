import { createSlice, nanoid } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => ({
        payload: { id: nanoid(), text },
      }),
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, text } = action.payload;
      const note = state.find((note) => note.id === id);
      if (note) note.text = text;
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;