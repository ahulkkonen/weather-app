import React, { Component } from "react";
import { Container, Header, Image, Divider } from "semantic-ui-react";

// Omat komponentit
import CitySearch from "./CitySearch";
import Geolocation from "./Geolocation";
import WeatherInfo from "./WeatherInfo";
import CityHistory from "./SavedCities";

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Container text style={{ marginTop: "2em" }}>
        <Header as="h1">
          <Image src={"favicon.png"} size="small" floated="left" />
          weather-app
        </Header>
        <Geolocation />
        <WeatherInfo />
        <CitySearch style={{ marginTop: "1em" }} />
        <CityHistory />
        <Divider />
        <p>
          <small>
            weather-app by Aleksi Hulkkonen. Uses React, Redux, redux-thunk,
            local-storage, axios, Semantic UI and lodash. Other resources used
            are{" "}
            <a href="https://github.com/mahemoff/geodata/">
              World cities data (by mahemoff)
            </a>{" "}
            and <a href="https://openweathermap.org">OpenWeatherMap</a> and{" "}
            <a href="http://geoip-db.com/">geoip-db</a> API. Icon created by{" "}
            <a href="https://freepik.com">Freepik</a> from{" "}
            <a href="www.flaticon.com">www.flaticon.com</a> (Flaticon Basic
            License).
          </small>
        </p>
      </Container>
    );
  }
}

export default App;
