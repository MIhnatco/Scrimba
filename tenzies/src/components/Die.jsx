import React from "react";

/**
 * Renders a button with a value
 *
 * @param {Object} tenzie
 *
 * @returns {JSX.Element}
 */

function Die({ tenzie, toggle }) {
  return (
    <button
      style={{ backgroundColor: tenzie.isHeld ? "#59E391" : "" }}
      className="grid-item"
      onClick={toggle}
      aria-pressed={tenzie.isHeld}
      aria-label={`Die with value ${tenzie.value}, ${tenzie.isHeld ? "held" : "no-held"}`}
    >
      {tenzie.value}
    </button>
  );
}

export default Die;
