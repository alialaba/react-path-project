const Button = (props) => {
    return (
        <div className="flex">
            <button className="btn">{props.text}</button>
        </div>
    );
}
export default Button;