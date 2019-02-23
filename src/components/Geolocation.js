import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import { fetchGeolocation } from "../actions";

class Geolocation extends Component {
  componentDidMount() {
    this.props.fetchGeolocation();
  }

  render() {
    console.log(this.props);
    const geolocation = this.props.geolocation;

    if (!geolocation) {
      return (
        <Message icon>
          <Icon name="circle notched" loading />
          <Message.Content>
            <Message.Header>Loading your location</Message.Header>
            We are detecting your location. Please allow up to 10 seconds.
          </Message.Content>
        </Message>
      );
    } else if (geolocation.status !== 200) {
      return (
        <Message negative>
          <Message.Header>Error fetching geolocation data</Message.Header>
          <p>{geolocation.message}</p>
        </Message>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    fetchGeolocation
  }
)(Geolocation);
