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
  console.log("Component rendered")
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      //get the datas from API to our useState
      .then(data => setAllMemes(data.data.memes))

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
