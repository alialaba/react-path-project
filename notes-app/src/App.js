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

  return (
    <main>
      <Split
        sizes={[30, 70]}
        direction="horizontal"
        className="split"
      >
        <Sidebar />


      </Split>

    </main>
  );
}
export default App;
