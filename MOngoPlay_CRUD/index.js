const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const axios = require("axios");

mongoose.connect(
  "mongodb+srv://tester:tester1234@cluster0.dk38gcz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const modelData = mongoose.model("modelData", dataSchema);
router.get("/", (req, res) => {
  modelData.find((err, doc) => {
    if (err) console.log(err.message);
    else {
      res.send(doc);
    }
  });
});
router.post("/", (req, res) => {
  const user = new modelData({
    name: req.body.name,
    age: req.body.age,
  });
  user.save((err, doc) => {
    if (err) return console.log(err);
    res.send(doc);
  });
});
router.put("/:id", (req, res) => {
  const user = modelData.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      age: req.body.age,
    },
    (err, doc) => {
      if (err) return console.log(err);
      res.send(doc);
    }
  );
});
router.delete("/:id", (req, res) => {
  modelData.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) return console.log(err);
    res.send(doc);
  });
});

module.exports = router;
