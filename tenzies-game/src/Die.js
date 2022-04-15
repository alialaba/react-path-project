const Die = (props) => {
    return (
        <div className="dice-face">
            <div className="dice-dot">{props.value}</div>
        </div>
    );
}
export default Die