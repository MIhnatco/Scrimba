import React, { useEffect, useRef } from "react";
import "./App.css";
import { nanoid } from "nanoid";

import Confetti from "react-confetti";

import Die from "./components/Die";

/**
 * A React a
 * @returns {JSX.Element}
 */

function App() {
  const [adjustDice, setAdjustDice] = React.useState(10);

  const [dice, setDice] = React.useState(() => generateAllNewDice(adjustDice));

  const [rollCount, setRollCount] = React.useState(0);

  const [pendingDice, setPendingDice] = React.useState(10);

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
  function generateAllNewDice(numberOfDice) {
    //array to store 10 random number between 1-6 inclusive
    let diceNumbers = [];

    //generating and storing the random numbers
    for (let i = 0; i < numberOfDice; i++) {
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
      setDice(() => generateAllNewDice(adjustDice));
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

  //handle input change
  function handleNumberOfDice(evt) {
    const value = Math.max(2, Math.min(10, Number(evt.target.value))); // Clamp value between 2 and 10
    setPendingDice(value);
  }

  //set the new number of dice
  function applyDiceAdjustment() {
    setAdjustDice(pendingDice); //update dice count
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

      <div className="adjust-dice-container">
        <label for="numbOfDice">Adjust number of DICE</label>
        <input
          type="number"
          id="numbOfDice"
          value={pendingDice}
          onChange={handleNumberOfDice}
          aria-label="Number of dice to play with"
        />
        <button onClick={applyDiceAdjustment}>Set</button>
      </div>

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
