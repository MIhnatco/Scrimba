import React, { useEffect } from "react";

function Main() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    setMeme((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [allMemes, setAllMemes] = React.useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMemeUrl,
    }));
  }

  return (
    <main>
      <div className="form">
        <div>
          <label htmlFor="topText">Top Text </label>
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            id="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="bottomText">Bottom Text </label>
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            id="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>

      <div className="meme">
        <img src={meme.imageUrl} alt="random image" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Main;
