import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { SearchNote, NotesList } from "../../components/notes";
import { Header } from "../../layouts/Header";

export const NotesContext = createContext();

const Notes = () => {
  const [notes, setNotes] = useState([]);
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []); // empty array runs only on first load

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (name) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: name.title,
      text: name.text,
      date: date.toLocaleDateString(),
      tags: name.tags,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

const editNote = (data) => {
  let tmp = [...notes];
  const index = tmp.findIndex((note) => note.id === data.id);
  if (index > -1) {
    tmp.splice(index, 1, data);
    setNotes(tmp);
  }
}

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };


  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="container mx-auto max-w-screen-lg min-h-screen p-4 ">
          <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
          <SearchNote />
          <NotesList
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleEditNote={editNote}
          />
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export default Notes;