import { useState, useEffect } from 'react';
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar"
import Split from 'react-split'

const App = () => {
    return (
        <main>
            <Split
                sizes={[25, 75]}
                minSize={100}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
            >
                <Sidebar />
                <Editor />
            </Split>
        </main>
    );
}
export default App;