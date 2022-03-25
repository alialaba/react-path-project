import Navbar from "./components/Navbar";
import Main from "./components/Main";

import { useState, useEffect } from "react"
function App() {
  //get meme image function
  const [meme, setMeme] = useState({

    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"


  })

  const [allMemes, setAllMemes] = useState([])


  useEffect(() => {
    /* Second way to use Api*/
    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = res.json()
      setAllMemes(data.data.memes);

    }
    getMemes();

  }, [])

  //function that generate meme images randomly
  const getMemeImage = () => {
    //variable that declare the random number
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    let url = allMemes[randomNumber].url;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
    // console.log(url)
    // console.log(memeArrays, randomNumber)
  }


  const handleChange = (event) => {
    //checking the name/ value attr
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))

  }

  return (
    <div className="meme-app">
      <Navbar />
      <Main
        handleOnClick={getMemeImage}
        handleOnChange={handleChange}
        meme={meme}
      />
    </div>
  );
}

export default App;
