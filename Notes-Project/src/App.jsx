import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, editNote } from "./Reducer/notesSlice";

function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAdd = () => {
    if (note.trim()) {
      dispatch(addNote(note));
      setNote("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleEditSave = (id) => {
    if (editingText.trim()) {
      dispatch(editNote({ id, text: editingText }));
      setEditingId(null);
      setEditingText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={handleAdd}>Add Note</button>
      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            {editingId === n.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleEditSave(n.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {n.text}
                <button onClick={() => handleEdit(n.id, n.text)}>Edit</button>
                <button onClick={() => handleDelete(n.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;