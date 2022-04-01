const Sidebar = ({ notes, newNote }) => {
    const noteElements = notes.map((note, index) => (
        <div key={note.id}>
            <div className="title">
                <h5>Note {index + 1} </h5>
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