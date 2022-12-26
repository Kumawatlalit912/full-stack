const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
router.get("/", (req, res) => {
  User.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      return console.error(err.message);
    });
});
router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    pasword: req.body.password,
  });
  user
    .save()
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      return console.log(err);
    });
});
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.param.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    (err, docs) => {
      if (err) return console.error(err.message);
      res.send(docs);
    }
  );
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) return console.error(err.message);
    res.send(docs);
  });
});

module.exports = router;
