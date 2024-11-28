import React from "react";
import "./App.css";

import { nanoid } from "nanoid";

import Die from "./components/Die";

/**
 *
 * @returns {JSX.Element}
 */

function App() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  /**
   * Generates a random number between 1 - 6 inclusive
   * @returns {number[]}
   */
  function generateAllNewDice() {
    //array to store 10 random number between 1-6 inclusive
    let diceNumbers = [];

    //generating and storing the random numbers
    for (let i = 0; i < 10; i++) {
      //generating a random number
      let nmb = Math.floor(Math.random() * 6 + 1);

      if (nmb >= 1 && nmb <= 6) {
        diceNumbers.push({ value: nmb, isHeld: false, id: nanoid() });
      }
    }
    return diceNumbers;
  }

  //random dice
  const diceElemements = dice.map((tenzie) => (
    <Die
      tenzie={tenzie}
      key={tenzie.id}
      toggle={() => holdBackground(tenzie.id)}
    />
  ));

  /**
   * Challenge: Update the `rollDice` function to not just roll
   * all new dice, but instead to look through the existing dice
   * to NOT role any that are being `held`.
   *
   * Hint: this will look relatively similiar to the `hold`
   * function below. When we're "rolling" a die, we're really
   * just updating the `value` property of the die object.
   */
  //roll new dice
  function rollDice() {
    setDice((prevState) =>
      prevState.map((tenzie) =>
        tenzie.isHeld === false
          ? { ...tenzie, value: Math.floor(Math.random() * 6 + 1) }
          : tenzie
      )
    );
  }

  //change background on click
  function holdBackground(id) {
    setDice((prevState) =>
      prevState.map((tenzie) =>
        tenzie.id === id ? { ...tenzie, isHeld: !tenzie.isHeld } : tenzie
      )
    );
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <section className="dice-container" aria-label="dice-container">
        {diceElemements}
      </section>

      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
