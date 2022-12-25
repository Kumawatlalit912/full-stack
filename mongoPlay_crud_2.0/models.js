const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
