import { useState, useEffect } from 'react';
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import Split from 'react-split';
import { nanoid } from 'nanoid'


const App = () => {
    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || "");

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))

    }, [notes])

    const createNote = () => {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown Here"
        }
        setNotes(prevNote => [newNote, ...prevNote]);
        setCurrentNoteId(newNote.id)
    }
    const updateNote = (text) => {
        setNotes(oldNotes => {
            let newArr = [];
            for (let i = 0; i < oldNotes.length; i++) {
                // move edited note to the top using psuedocode belloe
                //create a new empty array
                // Loop over the original array
                // if the id matches
                // put the updated note at the 
                // beginning of the new array
                // else
                // push the old note to the end
                // of the new array
                // return the new array

                let oldNote = oldNotes[i];
                if (oldNote.id === currentNoteId) {
                    newArr.unshift({
                        ...oldNote, body: text
                    });
                } else {
                    newArr.push(oldNote)
                }

            }
            return newArr;
        })
        //old code 
        // setNotes(oldNotes => oldNotes.map((oldNote) => {
        //     return oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote;
        // }
        // ))
    }
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId;
        }) || notes[0]

    }
    const deleteNote = (event, noteId) => {
        event.stopPropagation();
        setNotes(allNotes => allNotes.filter(note => note.id !== noteId))

    }
    return (
        <main>
            {notes.length > 0 ?
                < Split
                    sizes={[20, 80]}
                    minSize={100}
                    expandToMin={false}
                    gutterSize={10}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    cursor="col-resize"
                    className='split'
                >
                    <Sidebar
                        notes={notes}
                        newNote={createNote}
                        setCurrentNoteId={setCurrentNoteId}
                        currentNote={findCurrentNote()}
                        deleteNote={deleteNote}

                    />
                    <Editor
                        currentNote={findCurrentNote()}
                        updateNote={updateNote}
                    />
                </Split>
                :
                <section className='no-notes'>
                    <h1>No Notes created yet</h1>
                    <button className='first-note' onClick={createNote}>Create one</button>
                </section>
            }
        </main >
    );
}
export default App;