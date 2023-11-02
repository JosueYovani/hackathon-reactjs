import React, { useContext } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";
import { NotesContext } from "../../pages/notes/Notes";

const NotesList = ({ handleAddNote, handleDeleteNote, handleEditNote }) => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="NotesList lg:grid grid-cols-3 gap-6 space-y-8 lg:space-y-0">
      <NoteForm handleAddNote={handleAddNote} />
      {notes?.map((note, index) => (
        <Note key={index} note={note} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
      ))}
    </div>
  );
};

export default NotesList;