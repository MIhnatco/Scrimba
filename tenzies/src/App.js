import React from "react";
import "./App.css";

import Die from "./components/Die";

/**
 * Challenge:
 *
 * Write a function (generateAllNewDice) that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 * Log the array of numbers to the console for now
 */

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 *
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

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
        diceNumbers.push(nmb);
      }
    }
    return diceNumbers;
  }

  //random dice
  const diceElemements = dice.map((tenzie, idx) => (
    <Die value={tenzie} key={idx} />
  ));

  //roll new dice
  function rollDice() {
    setDice(generateAllNewDice());
  }

  return (
    <main>
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
