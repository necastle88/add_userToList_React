import React, { Component } from "react";
import "./App.css";

class HideText extends Component {
  state = {
    displayText: false,
  };

  ToggleBtnHandler = () => {
    this.setState((prevState) => ({
      displayText: !prevState.displayText,
    }));
  };

  render() {
    return (
      <div className="toggleContainer">
        <h5 className="gamesPlayed">
          {!this.state.displayText && this.props.text}
        </h5>
        <button onClick={this.ToggleBtnHandler}>
          {!this.state.displayText ? "Hide games played" : "Show Games played"}
        </button>
      </div>
    );
  }
}

export default HideText;
