export function Meme({randomImg, topText, bottomText}){
    return(
        <section className="meme">
            <img className="meme__img" src={randomImg}/>
            <h2 className="meme__text meme--top">{topText}</h2>
            <h2 className="meme__text meme--bottom">{bottomText}</h2>
        </section>
    );
}