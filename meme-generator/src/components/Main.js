// import Logo from "../logo.png";
const Main = ({ handleOnClick, meme, handleOnChange }) => {
    return (
        <section>
            <div className="container">
                <div className="form">
                    <div className="form--wrap">
                        <input
                            className="form--input"
                            type="text"
                            placeholder="Top Text"
                            name="topText"
                            value={meme.topText}
                            onChange={handleOnChange}

                        />

                        <input
                            className="form--input"
                            type="text"
                            placeholder="Bottom Text"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleOnChange}
                        />
                    </div>
                    <button onClick={handleOnClick} className="form--btn">Get a new meme image  🖼</button>

                </div>
                <div className="meme-wrap">
                    <img className="meme-img" src={meme.randomImage} alt="meme" />
                    <h2 className="meme__text top">{meme.topText}</h2>
                    <h2 className="meme__text bottom">{meme.bottomText}</h2>

                </div>
            </div>

        </section>

    );
}
export default Main