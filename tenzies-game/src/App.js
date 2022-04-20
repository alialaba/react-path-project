import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'


import Die from "./Die";
import Button from "./Button";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameDice = dice.every(die => die.value === firstValue)
    console.log(allDiceHeld, allSameDice);
    if (allDiceHeld && allSameDice) {
      setTenzies(true);
      console.log("You Won!");
    }
  }, [dice])

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  //random dice
  function allNewDice() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      randomArr.push(generateNewDice());
    }
    return randomArr;
  }
  //Roll Dice
  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        // if the isHeld == true will be return and the false will recreate it obj
        return die.isHeld ?
          die :
          generateNewDice()
      }));
    } else {
      setTenzies(false)
      setDice(allNewDice)
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      //if the dice === id clicked return obj but change the isHeld value to false if not return obj
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
      {tenzies && <Confetti />}
      <div className="wrapper">
        <div className="center">
          <h2>Tenzies</h2>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="grid">
          {diceElements}
        </div>
        <Button text={tenzies ? "New game" : "Roll"} onClick={rollDice} />
      </div>
    </main >
  );
}

export default App;
