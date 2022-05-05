import Starter from "./components/Starter";
import Questions from "./components/Questions";
import { useState, useEffect } from "react";

function App() {
  // https://opentdb.com/api.php?amount=5&type=multiple
  return (
    <div className="App">

      <Starter />

      {/* <Questions /> */}
    </div>
  );
}

export default App;
