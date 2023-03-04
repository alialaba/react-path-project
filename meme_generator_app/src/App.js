import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { useState } from 'react';
import { Meme } from './components/Meme';
function App() {

const [meme,setMeme] = useState({
  topText :"",
  bottomText:"",
  randomImg :"http://i.imgflip.com/1bij.jpg"

})


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
     <Form handleChange={handleChange} topText={meme.topText} bottomText={meme.bottomText}/>
     <Meme topText={meme.topText} bottomText={meme.bottomText} img={meme.randomImg}/>
    </div>
    </main>
  );
}

export default App;
