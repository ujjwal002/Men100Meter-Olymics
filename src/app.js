const express = require("express");
require("../src/db/conn.js");
const MensRanking = require("../src/models/mens");
const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
const connection = async () => {
  await app.listen(port, () => {
    console.log(`connection live at port no.${port}`);
  });
};
connection();
