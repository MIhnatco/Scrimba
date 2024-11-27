import React from "react";
import "./App.css";

import { nanoid } from "nanoid";

import Die from "./components/Die";
/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 *
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 *
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

/**
 * Challenge: Create a function `hold` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 *
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
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
    setDice(generateAllNewDice());
  }

  /**
   * Challenge: Update the `hold` function to flip
   * the `isHeld` property on the object in the array
   * that was clicked, based on the `id` prop passed
   * into the function.
   *
   * Hint: as usual, there's more than one way to
   * accomplish this.
   */
  function holdBackground(id) {
    setDice((prevState) =>
      prevState.map((tenzie) =>
        tenzie.id === id ? { ...tenzie, isHeld: !tenzie.isHeld } : tenzie
      )
    );
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
