import Logo from "../logo.png";
const Main = () => {
    return (
        <section>
            <div className="container">
                <div className="form">
                    <div className="form--wrap">
                        <input className="form--input" type="text" placeholder="Shut up" />
                        <input className="form--input" type="text" placeholder="and take my money" />
                    </div>
                    <button className="form--btn">Get a new meme image  🖼</button>

                </div>
                <img src={Logo} />
            </div>

        </section>

    );
}
export default Main