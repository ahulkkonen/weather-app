import { combineReducers } from "redux";

const selectedCityReducer = (state = null, action) => {
  switch (action.type) {
    case "CITY_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

const geolocationReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_GEOLOCATION":
      return action.payload;
    case "FETCH_GEOLOCATION_ERROR":
      return action.payload;
    default:
      return state;
  }
};

const weatherInfoReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return action.payload;
    case "FETCH_WEATHER_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  city: selectedCityReducer,
  geolocation: geolocationReducer,
  weather: weatherInfoReducer
});
