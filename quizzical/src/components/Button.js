const Button = (props) => {
    return (
        <button className={`btn ${props.styles}`} onClick={props.onClick}>{props.text}</button>
    );
}
export default Button;