import React from "react";

function Main() {
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Morder" name="bottomText" />
        </label>

        <button>Get a new meme image</button>
      </div>

      <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg" alt="Boromir" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}

export default Main;
