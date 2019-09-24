require("dotenv").config();
const axios = require("axios");
const { API } = process.env;

let get5dayCurrentLocation = async (req, res) => {
  let results = await axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/335731?apikey=${API}`
  );
  let info = results.data;
  if (info) {
    res.status(200).json(info);
  }
};

let getCurrentConditions = async (req, res) => {
  let results = await axios.get(`
  http://dataservice.accuweather.com/currentconditions/v1/335731?apikey=${API}
  `);
  let info = results.data;
  if (info) {
    res.status(200).json(info);
  }
};

let getQueryLocation = async (req, res) => {
  let results = await axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=tZjXvNAiH5lTdtS0pSeAd3iGhReU2aFW&q=MESQUITE`
  );
  let info = results.data;
  if (info) {
    res.status(200).json(info);
  }
};
let getCurrentLocation = async (req, res) => {
  let results = await axios.get(`
  http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=tZjXvNAiH5lTdtS0pSeAd3iGhReU2aFW&q=32.807551%2C-96.641733
  `);
  let info = results.data;
  if (info) {
    res.status(200).json(info);
  }
};

module.exports = {
  get5dayCurrentLocation,
  getCurrentConditions,
  getQueryLocation,
  getCurrentLocation
};
