import React from "react";

/**
 * Renders a button with a value
 *
 * @param {Object} tenzie
 *
 * @returns {JSX.Element}
 */

function Die({ tenzie, toggle }) {
  const buttonStyle = { backgroundColor: tenzie.isHeld ? "#59E391" : "" };

  //event handler function from properties
  const onToggle = () => toggle();

  return (
    <button
      style={buttonStyle}
      className="grid-item"
      onClick={onToggle}
      aria-pressed={tenzie.isHeld}
      aria-label={`Die with value ${tenzie.value}, ${
        tenzie.isHeld ? "held" : "no-held"
      }`}
    >
      {tenzie.value}
    </button>
  );
}

export default Die;
