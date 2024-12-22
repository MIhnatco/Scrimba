import React from "react";

function Main() {
  return (
    <main>
      <div className="form">
        <label htmlFor="topText">Top Text </label>
        <input
          type="text"
          placeholder="One does not simply"
          name="topText"
          id="topText"
        />

        <label htmlFor="bottomText">Bottom Text </label>
        <input
          type="text"
          placeholder="Walk into Mordor"
          name="bottomText"
          id="bottomText"
        />

        <button>Get a new meme image</button>
      </div>

      <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg" alt="random image" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}

export default Main;
