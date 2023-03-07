import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { useState , useEffect} from 'react';
import { Meme } from './components/Meme';
function App() {

const [meme,setMeme] = useState({
  topText :"",
  bottomText:"",
  randomImg :"http://i.imgflip.com/1bij.jpg"

})
const [allMemes, setAllMemes] = useState([]);


//useeffect that fetch the data from APi
useEffect(()=>{

  async function getMeme (){
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemes(data.data.memes)
  }
  getMeme()

}, [])

//generator new meme image
function getMemeImg(){

  //generate random images
const randomNumber = Math.floor(Math.random() * allMemes.length);
const url= allMemes[randomNumber].url;

//update the state with the text and random images
setMeme(prevMeme=>({
  ...prevMeme,
  randomImg: url
}))
}


//handle input change
function handleChange(event){
  const {name, value} =  event.target;

  setMeme(prevMeme =>({
       ...prevMeme,
       [name]: value
  }))
}


  return (
    <main style={{backgroundColor:"#f9f9fb", height:"100vh"}}>
      <div className="app-container">
     <Header/>
     <Form handleChange={handleChange} handleOnClick={getMemeImg} topText={meme.topText} bottomText={meme.bottomText}/>
     <Meme topText={meme.topText} bottomText={meme.bottomText} randomImg={meme.randomImg}/>
    </div>
    </main>
  );
}

export default App;
