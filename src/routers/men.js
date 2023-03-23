const express = require("express");
const router = new express.Router();

const MenRanking = require("../models/mens");
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecors = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecors.save();
    res.status(200).send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const getMens = await MenRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get request of individul
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MenRanking.findById(_id);
    res.status(200).send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

// we will handes patch req of individual(patch)

router.patch("/mens/:id", async (req, res) => {
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

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MenRanking.findByIdAndDelete(_id);
    res.status(200).send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
