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
    >
      {tenzie.value}
    </button>
  );
}

export default Die;
