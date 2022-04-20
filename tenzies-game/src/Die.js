const Die = (props) => {
    const bgColor = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff"
    }
    return (
        <div className="dice-face" style={bgColor} onClick={props.holdDice}>
            <div className="dice-dot">{props.value}</div>
        </div>
    );
}
export default Die