const express = require('express');
const appApi = require('./routers/app.js');
const cors = require("cors");
//const http = require("http");
const app = express();
const port = 3001;

const whitelist = ["http://localhost:3001", "http://localhost:3000",]
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
  credentials: true,
};
app.use(cors(options));
app.use(express.json());
appApi(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/GapsiECommerce/Api/ver`);
}
);

