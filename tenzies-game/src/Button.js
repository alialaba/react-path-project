const Button = (props) => {
    return (
        <div className="flex">
            <button className="btn" onClick={props.onClick}>{props.text}</button>
        </div>
    );
}
export default Button;