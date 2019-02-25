import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Statistic, Message } from "semantic-ui-react";

import { fetchWeather } from "../actions/";

class WeatherInfo extends Component {
  // Haetaan uusi weather data kun valittu kaupunki muuttuu
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.city !== this.props.city) {
      this.props.fetchWeather(this.props.city.city);
    }
  }

  render() {
    if (!this.props.city || !this.props.weather) return <div data-testid="weather-info-null"></div>;
    if (this.props.city instanceof Error || this.props.weather instanceof Error)
      return (
        <Message negative>
          <Message.Header>Error fetching data</Message.Header>
          <p>Please check your internet connection or come back later.</p>
        </Message>
      );

    const weather = {
      temp: Math.round(this.props.weather.data.main.temp) || 0,
      pressure: Math.round(this.props.weather.data.main.pressure) || 0,
      humidity: Math.round(this.props.weather.data.main.humidity) || 0,
      wind: Math.round(this.props.weather.data.wind.speed) || 0
    };

    return (
      <Card fluid data-testid="weather-info">
        <Card.Content>
          <Card.Header>{this.props.city.city}</Card.Header>
          <Card.Description>{this.props.city.country}</Card.Description>
        </Card.Content>

        <Card.Content>
          <Statistic.Group widths="four">
            <Statistic>
              <Statistic.Value>{weather.temp}</Statistic.Value>
              <Statistic.Label>Temperature (°C)</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>{weather.pressure}</Statistic.Value>
              <Statistic.Label>Pressure (hPa)</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>{weather.humidity}</Statistic.Value>
              <Statistic.Label>Humidity (%)</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>{weather.wind}</Statistic.Value>
              <Statistic.Label>Wind (m/s)</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherInfo);
