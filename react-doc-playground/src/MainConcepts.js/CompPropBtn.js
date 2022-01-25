

const CompPropBtn = (props) => {
    return (<div>
        <button className="btn" style={{ backgroundColor: props.color }}>{props.text}</button>
    </div>);
};

export default CompPropBtn;
