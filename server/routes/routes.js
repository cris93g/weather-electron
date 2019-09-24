const {
  get5dayCurrentLocation,
  getCurrentConditions,
  getQueryLocation,
  getCurrentLocation
} = require("../API/ApiController");

module.exports = app => {
  app.get(`/api/5day`, get5dayCurrentLocation);
  app.get(`/api/current`, getCurrentConditions);
  app.get("/api/search", getQueryLocation);
  app.get("/api/currentLocation", getCurrentLocation);
};
