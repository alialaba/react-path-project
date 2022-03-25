const Sidebar = ({ notes, newNote }) => {

    const noteElements = notes.map((note, index) =>
        <div key={note.id}>
            <div className="title">
                <h4>Note {index + 1}</h4>
            </div>
        </div>)

    return (
        <aside className="pane sidebar" >
            <div className="sidebar__header">
                <h4 className="sidebar__title">NoteApp</h4>
                <button className="sidebar__btn" onClick={newNote} >+</button>
            </div>
            {noteElements}
        </ aside>
    );
}
export default Sidebar;