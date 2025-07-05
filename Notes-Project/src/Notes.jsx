import React ,{ useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, editNote } from "./Reducer/notesSlice";
import './Notes.css'
const Notes = () => {
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
    <div className="notes-container">
      <div className='notes-input'>
        <input
          className="note-input-field"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
        />
        <button className="buttons" onClick={handleAdd}>
          Add Note
        </button>
      </div>
      <ul className="notes-list">
        {notes.map((n) => (
          <li className="notes-list-item" key={n.id}>
            {editingId === n.id ? (
              <>
                <input
                  className="list-input-field"
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button
                  className="list-buttons"
                  onClick={() => handleEditSave(n.id)}
                >
                  Save
                </button>
                <button
                  className="list-buttons"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {n.text}
                <button
                  className="list-buttons"
                  onClick={() => handleEdit(n.id, n.text)}
                >
                  Edit
                </button>
                <button
                  className="list-buttons"
                  onClick={() => handleDelete(n.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes