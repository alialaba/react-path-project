import Logo from "../logo.png";
const Main = ({ OnClick, meme }) => {
    return (
        <section>
            <div className="container">
                <div className="form">
                    <div className="form--wrap">
                        <input className="form--input" type="text" placeholder="Top Text" />
                        <input className="form--input" type="text" placeholder="Bottom Text" />
                    </div>
                    <button onClick={OnClick} className="form--btn">Get a new meme image  🖼</button>

                </div>
                <img className="meme-img" src={meme.randomImage} alt="meme image" />
            </div>

        </section>

    );
}
export default Main