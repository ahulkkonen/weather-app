import geoip from "../apis/geoip-db";
import openWeatherMap from "../apis/openWeatherMap";

export const setCity = (city, country) => {
  return {
    type: "CITY_SELECTED",
    payload: { city, country }
  };
};

export const fetchWeather = city => async (dispatch, getState) => {
  await openWeatherMap
    .get(
      "weather?APPID=09aa9ec35b86301fc410ac3b333766da&units=metric&q=" + city
    )
    .then(res => {
      dispatch({
        type: "FETCH_WEATHER",
        payload: res
      });
    })
    .catch(err =>
      dispatch({
        type: "FETCH_WEATHER_ERROR",
        payload: err
      })
    );
};

export const fetchGeolocation = () => async (dispatch, getState) => {
  await geoip
    .get()
    .then(res => {
      dispatch({
        type: "FETCH_GEOLOCATION",
        payload: res
      });

      const { city, country_name } = res.data;
      // Päivitetään kaupunki
      dispatch({
        type: "CITY_SELECTED",
        payload: { city, country: country_name }
      });

      // Ladataan weather data
      fetchWeather(city);
    })
    .catch(err =>
      dispatch({
        type: "FETCH_GEOLOCATION_ERROR",
        payload: err
      })
    );
};
