const { getLocation } = require("../API/ApiController");

module.exports = app => {
  app.get(`/api/5day`, getLocation);
};
