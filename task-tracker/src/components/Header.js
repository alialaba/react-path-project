import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, onShow, darkMode, toggleDarkMode }) => {
    return (
        <header className={`header ${darkMode ? "dark" : ""}`}  >
            <h2>{title}</h2>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider">
                    <div className="toggler--slider--circle" onClick={toggleDarkMode}></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            <Button color={onShow ? "red" : "green"} text={onShow ? "Close" : "Open"} onClick={onAdd} />
        </header>
    );
};
Header.defaultProps = {
    title: "Task Tracker",
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
