# Meme Generator App

A React-based Meme Generator app that allows users to create memes by customizing the top and bottom text of an image. Users can also fetch a random meme image from an external API.

## Features

- Dynamically edit top and bottom text for memes.
- Fetch a random meme image from [Imgflip API](https://api.imgflip.com/get_memes).
- Fully responsive and interactive UI
- State management using React's 'useState' and 'useEffect' hooks.

## Core functionalities

1. State management
   - meme: Stores the current meme data including text and image URL.
   - allMemes: Stores the list of memes fetched from the Imgflip API.
2. Fetching Meme images:
   - On component mount, 'useEffect' fetches meme data from the Imgflip API and stores it in 'allMemes'
3. Getting a Random Meme:
   - The 'getMemeImage' function selects a random image from the list and updates the 'meme' state with the new image URL
4. Dynamic Input handling:
   - The 'handleChange' function updates the 'meme' state when users type into the top or bottom text input fields.

## Technologies Used

    - **React.js:** Frontend library for building the UI.
    - **JavaScript:** Core programming language.
    - **CSS:** For styling the components.

## Contribution

Contribution are welcome! Feel free to opne issues or submit pull requests.
