import React, { Component } from "react";

export default class FlipCoin extends Component {
  constructor() {
    super();
    this.state = {
      isHead: true,
    };
  }
  flipCoin = (e) => {
    let random = Math.random();
    if (random < 0.5) {
      this.setState({
        isHead: true,
      });
    } else {
      this.setState({
        isHead: false,
      });
    }
  };
  render() {
    return this.state.isHead ? (
      <div>
        {" "}
        Head{" "}
        <div>
          <button onClick={this.flipCoin}>Flip coin</button>
        </div>
      </div>
    ) : (
      <div>
        Tail{" "}
        <div>
          <button onClick={this.flipCoin}>Flip coin</button>
        </div>
      </div>
    );
  }
}
