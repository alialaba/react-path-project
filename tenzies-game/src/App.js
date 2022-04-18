import { useState } from "react";
import { nanoid } from "nanoid"

import Die from "./Die";
import Button from "./Button";

function App() {
  const [dice, setDice] = useState(allNewDice());

  //random dice
  function allNewDice() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      randomArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      });
    }
    // console.log(randomArr)
    return randomArr;
  }
  //Roll Dice
  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } : die
    }))
  }

  const diceElements = dice.map((die) => {
    return <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)} />
  })
  return (
    <main>
      <div className="wrapper">
        <div className="center">
          <h2>Tenzies</h2>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="grid">
          {diceElements}
        </div>
        <Button text="Roll" onClick={rollDice} />
      </div>
    </main>
  );
}

export default App;
