import React, { Component } from "react";
export default class Dice extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      image: "fa-dice-one",
    };
  }
  rollDice = () => {
    this.setState({
      number: Math.ceil(Math.random() * 6),
    });
  };

  render() {
    return (
      <div>
        <i class="fa-solid fa-dice-one fa-2xl"></i>
        <div>
          <b>{this.state.number}</b>
        </div>

        <button onClick={this.rollDice}> Roll the dice</button>
      </div>
    );
  }
}
