import Proptypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, onShow }) => {

    return (
        <header className="header">
            <h2>{title}</h2>
            <Button text={onShow ? "Close" : "Open"} color={onShow ? "red" : "green"} onClick={onAdd} />
        </header>
    );
}
Header.defaultProps = {
    title: "Task Tracker"
}
Header.prototypes = {
    title: Proptypes.string.isRequired
}
export default Header;