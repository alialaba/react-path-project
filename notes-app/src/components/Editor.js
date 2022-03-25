import { useState } from "react";
import ReactMde from "react-mde";

const Editor = ({ newNote }) => {
    const [selectedTab, setSelectedTab] = useState("Write")
    return (
        <section>
            <ReactMde>
                value={newNote.body}

            </ReactMde>

        </section>
    );
}
export default Editor