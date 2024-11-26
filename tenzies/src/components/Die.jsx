import React from "react";


/**
 * Renders a button with a value
 * 
 * @param {*} value 
 * @returns {JSX.Element}
 */

function Die({ value }) {
  return <button className="grid-item">{value}</button>;
}

export default Die;
