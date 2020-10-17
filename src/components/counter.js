import React, { Component } from "react";

export class Counter extends Component {
    state = {
        count: 1,
    };
    format() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }

    handleIncrement(){
        console.log("increment clicked!")

    }
    render() {
        let c = "badge m-2 " + (this.state.count === 0 ? "badge-warning" : "badge-info");
        return (
            <div>
                {/* This is counter Component */}
                <h3 className={c}>{this.format()}</h3>
                <button onClick={this.handleIncrement} className="btn btn-primary">increment</button>
            </div>
        );
    }
}

export default Counter;
