const Navbar = () => {
    return (
        <nav className="nav">
            <img className="nav__logo" src={process.env.PUBLIC_URL + "/logo.png"} />
            <p className="nav__text">my travel journal</p>
        </nav>
    );
}
export default Navbar