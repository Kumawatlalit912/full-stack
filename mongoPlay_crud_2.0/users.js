const express = require("express");
const router = express.Router();
const User = require("./models");

router.get("/", (req, res) => {
  User.find((error, docs) => {
    if (error) return console.log("no users found");
    res.send(docs);
  });
});
router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    hobby: req.body.hobby,
  });
  user.save((error, docs) => {
    if (error) return console.log(error);
    res.send(docs);
  });
});
router.put("/", (req, res) => {
  const user = User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      age: req.body.age,
      hobby: req.body.hobby,
    },
    (error, docs) => {
      if (error) return console.log("user not found");
      res.send(docs);
    }
  );
});
router.delete("/", (req, res) => {
  User.findByIdAndDelete(req.param.user, (error, docs) => {
    if (error) return console.log("user not found");
    res.send(docs);
  });
});

module.exports = router;
