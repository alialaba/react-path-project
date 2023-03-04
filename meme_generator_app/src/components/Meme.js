export function Meme({img, topText, bottomText}){
    return(
        <div className="meme">
            <img className="meme-img" src={img}/>
            <h2 className="meme-text top">{topText}</h2>
            <h2 className="meme-text bottom">{bottomText}</h2>
        </div>
    );
}