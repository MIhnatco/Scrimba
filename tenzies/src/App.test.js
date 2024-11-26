import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  describe("Rendering tests", () => {
    it("renders main element", () => {
      render(<App />);

      // Check if the <main> element is in the document
      const mainElement = screen.getByRole("main");
      expect(mainElement).toBeInTheDocument();
    });

    it("renders section element", () => {
      render(<App />);

      //Query by class name
      const sectionElement = screen.getByRole("region", {
        name: /dice-container/i,
      });
      expect(sectionElement).toBeInTheDocument();
    });

    it("render Roll button", () => {
      render(<App />);

      //Check for the Roll button with name
      const btnElement = screen.getByRole("button", {
        name: "Roll",
      });
      expect(btnElement).toBeInTheDocument();
    });

    it("renders 10 dice elements", () => {
      render(<App />);

      //Find all button sin the dice-container
      const diceElements = screen.getAllByRole("button");
      expect(diceElements.length).toBe(11); //10 dice + 1 "Roll" button
    });

    it("ensures dice values are number between 1 and 6", () => {
      render(<App />);

      //Find all dice buttons (without Roll button)
      const diceElements = screen.getAllByRole("button").slice(0, 10);

      diceElements.forEach((die) => {
        const value = Number(die.textContent);
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThanOrEqual(6);
      });
    });
  });

  describe("State and Behavior tests", () => {
    it("initial state contains 10 numbers between 1 to 6", () => {
      render(<App />);

      //Find all dice buttons (without Roll button)
      const diceElemements = screen.getAllByRole("button").slice(0, 10);

      expect(diceElemements.length).toBe(10);

      diceElemements.forEach((die) => {
        const value = Number(die.textContent);
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThanOrEqual(6);
      });
    });

    it("updates dice state and re-renders new dice values when Roll is clicked", () => {
      render(<App />);

      //save initial dice values
      const initialDiceValues = screen
        .getAllByRole("button")
        .slice(0, 10)
        .map((die) => die.textContent);

      //Roll
      const rollButton = screen.getByRole("button", { name: "Roll" });
      fireEvent.click(rollButton);

      //save new dice values
      const newDiceValues = screen
        .getAllByRole("button")
        .slice(0, 10)
        .map((die) => die.textContent);

      //state should update (at least some values should differ)
      expect(newDiceValues).not.toEqual(initialDiceValues);

      //new state should have 10 dice
      expect(newDiceValues.length).toBe(10);

      //validate the range of new dice
      newDiceValues.forEach((value) => {
        let number = Number(value);
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(6);
      });
    });

    it("ensures dice values are valid after multiple rolls", () => {
      render(<App />);

      const rollButton = screen.getByRole("button", { name: "Roll" });

      //Roll multiple times and validate values
      for (let i = 0; i < 5; i++) {
        fireEvent.click(rollButton);

        const diceValues = screen
          .getAllByRole("button")
          .slice(0, 10)
          .map((die) => Number(die.textContent));

        diceValues.forEach((value) => {
          expect(value).toBeGreaterThanOrEqual(1);
          expect(value).toBeLessThanOrEqual(6);
        });
      }
    });
  });
});
