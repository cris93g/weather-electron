const express = require("express");
const { json } = require("cors");
const cors = require("cors");
routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3001;

routes(app);
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
