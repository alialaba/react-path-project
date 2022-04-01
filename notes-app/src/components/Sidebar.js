const Sidebar = ({ notes, newNote, setCurrentNoteId, currentNote }) => {
    const noteElements = notes.map((note, index) => (
        // setCurrentNoteId(note.id) was used to identify id of the note created when clicked
        <div key={note.id}>
            <div className={`title ${note.id === currentNote.id ? "selected-one" : ""}`} onClick={() => setCurrentNoteId(note.id)} >
                <h5 className="text-snippet">Note {index + 1} </h5>
            </div>
        </div>
    ))
    return (

        <aside className="sidebar">

            <div className="sidebar__header">
                <h4>Noteapp</h4>
                <button className="sidebar__btn" onClick={newNote}>+</button>
            </div>
            {noteElements}
        </aside>
    );
}
export default Sidebar