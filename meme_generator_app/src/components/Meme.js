export function Meme({img, topText, bottomText}){
    return(
        <div className="meme">
            <img src={img}/>
            <h2>{topText}</h2>
            <h2></h2>
        </div>
    );
}