import React, { useEffect } from "react";



/**
 * Main component for the Meme Generator app
 * Allows users to create memes by customizing text and generating random meme images.
 * 
 * @component
 * @returns {JSX.Element}
 */


function Main() {
  /**
   * State for storing the current meme data
   * 
   * @typedef {Object} meme
   * @property {string} topText - The text displayed at the top of the meme
   * @property {string} bottomText - The text displayed at the bottom of the meme
   * @property {string} imageUrl - The URL of the meme image
   */

  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });


  /**
   * Handles changes to the text inputs and updates the meme state
   * @param {*React.ChangeEvent<HTMLInputElement>} event - The input change event
   */
  function handleChange(event) {
    setMeme((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }


  /**
   * State for storing all available memes fetched from the API
   * @type {Array<Object>}
   */
  const [allMemes, setAllMemes] = React.useState([]);


  /**
   * Fetches meme templates from the Imgflip API on component mount
   * Updates the 'allMemes' state with the fetched data
   */
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);


  /**
   * Generates a new random meme image by selecting a random URL
   * from the 'allMemes' state and updates the meme state.
   */
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
