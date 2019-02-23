import axios from "axios";

export default axios.create({
  baseURL: "https://geoip-db.com/json/"
});
