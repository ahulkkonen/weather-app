import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import { setCity } from "../actions";

class CityButton extends Component {
  handleClick = e => {
    e.preventDefault();

    this.props.setCity(this.props.cityName);
  };

  render() {
    return (
      <Button
        basic
        color={this.props.color}
        style={{ marginBottom: "1em" }}
        onClick={this.handleClick}
      >
        {this.props.cityName}
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { setCity }
)(CityButton);
