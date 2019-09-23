require("dotenv").config();
const axios = require("axios");
const { API } = process.env;
let getLocation = async (req, res) => {
  let results = await axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/335731?apikey=${API}`
  );
  let info = results.data;
  if (info) {
    res.status(200).json(info);
  }
};
module.exports = {
  getLocation
};
