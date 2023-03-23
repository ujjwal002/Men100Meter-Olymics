const express = require("express");
const app = express();
require("../src/db/conn.js");
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("hello from the ujjwal technical");
});

const connection = async () => {
  await app.listen(port, () => {
    console.log(`connection live at port no.${port}`);
  });
};
connection();
