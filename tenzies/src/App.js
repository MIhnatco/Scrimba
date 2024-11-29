import React from "react";
import "./App.css";
import { nanoid } from "nanoid";

import Confetti from "react-confetti";

import Die from "./components/Die";

/**
 *
 * @returns {JSX.Element}
 */

function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());

  /**
   * Challenge:
   * Log "Game won!" to the console only if the 2 winning
   * conditions are met.
   *
   * 1. all the dice are being held, and
   * 2. all the dice have the same value
   *
   * For now, no need to even save a variable!
   */

  /**
   * Challenge part 2:
   * 1. Create a new `gameWon` variable.
   * 2. If `gameWon` is true, change the button text to
   *    "New Game" instead of "Roll"
   */

  /**
   * Challenge:
   * Make the confetti drop when the game is won! 🎉🎊
   */

  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

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
        {gameWon ? "New Game" : "Roll"}
      </button>

      {gameWon && <Confetti />}
    </main>
  );
}

export default App;
