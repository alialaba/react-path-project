import React from "react"
class Clock extends React.Component {
    //setting a global state
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

    }

    // Adding Lifecycle Methods to a Class
    //mounting
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            // Adding Local State to a Class
            <div>
                <h1>The time says  {this.state.date.toLocaleTimeString()}</h1>

            </div>);
    }
}

export default Clock;
