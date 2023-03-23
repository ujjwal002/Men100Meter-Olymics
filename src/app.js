const express = require("express");
const MensRanking = require("../src/models/mens");
const app = express();
require("../src/db/conn.js");
const MenRanking = require("../src/models/mens");
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/mens", async (req, res) => {
  try {
    const addingMensRecors = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecors.save();
    res.status(200).send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/mens", async (req, res) => {
  try {
    const getMens = await MenRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get request of individul
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MenRanking.findById(_id);
    res.status(200).send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

// we will handes patch req of individual(patch)

app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MenRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MenRanking.findByIdAndDelete(_id);
    res.status(200).send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

const connection = async () => {
  await app.listen(port, () => {
    console.log(`connection live at port no.${port}`);
  });
};
connection();
