import React, { useEffect, useRef } from "react";
import "./App.css";
import { nanoid } from "nanoid";

import Confetti from "react-confetti";

import Die from "./components/Die";

/**
 * Challenge:
 * Tracking the Number of Rolls in Tenzies
 */
/**
 *
 * @returns {JSX.Element}
 */

function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());

  const [rollCount, setRollCount] = React.useState(0);

  const buttonRef = useRef(null);

  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  //adding focus to Roll button at the end of the game
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

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
      let randomNumber = Math.floor(Math.random() * 6 + 1);

      if (randomNumber >= 1 && randomNumber <= 6) {
        diceNumbers.push({ value: randomNumber, isHeld: false, id: nanoid() });
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
    if (!gameWon) {
      setDice((prevState) =>
        prevState.map((tenzie) =>
          tenzie.isHeld === false
            ? { ...tenzie, value: Math.floor(Math.random() * 6 + 1) }
            : tenzie
        )
      );

      //counting rolls
      setRollCount((prevCount) => prevCount + 1);
    } else {
      setDice(generateAllNewDice());
      setRollCount(0);
    }
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
      {/*Accessibility */}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>

      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      {gameWon ? (
        <h3 className="roll-won">You won in {rollCount} rolls!</h3>
      ) : (
        <h3 className="roll-count">Number of Rolls: {rollCount} </h3>
      )}
      <section className="dice-container" aria-label="dice-container">
        {diceElemements}
      </section>

      <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>

      {gameWon && <Confetti />}
    </main>
  );
}

export default App;
