import Logo from "../logo.png"
const Navbar = () => {
    return (
        <nav className="nav">
            <a href="#" className="nav--brand">
                <img className="nav--logo" src={Logo} alt="logo-img" />
                <h5 className="nav--name">Meme Generator</h5>
            </a>
            <p>React Course - Project 3</p>
        </nav>
    );
}
export default Navbar;