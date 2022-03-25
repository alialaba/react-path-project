import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from 'react-split';
import ReactMde from "react-mde";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  )

  //function that create new note obj
  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      type: "# Type your markdown note's title here "
    }
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id)
  }

  return (
    <main>
      <Split
        sizes={[20, 80]}
        direction="horizontal"
        className="split"
      >
        <Sidebar
          notes={notes}
          newNote={createNewNote}

        />
        <Editor
          newNote={createNewNote}
        />

      </Split>

    </main>
  );
}
export default App;
