import { useState } from "react";

import Die from "./Die";
import Button from "./Button";

function App() {
  const [dice, setDice] = useState(allNewDice());

  //random dice
  function allNewDice() {
    let randomArr = [];
    for (let i = 1; i < 10; i++) {
      randomArr.push(Math.ceil(Math.random() * 6));
    }
    return randomArr;
  }


  const diceElements = dice.map((die) => {
    return <Die value={die} />
  })
  return (
    <main>
      <div className="wrapper">
        <div className="center">
          <h2>Tenzies</h2>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="grid">
          <Die value="1" />
          {diceElements}
        </div>
        <Button text="Roll" />
      </div>
    </main>
  );
}

export default App;
