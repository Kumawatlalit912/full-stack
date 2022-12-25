const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    age: Number,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model(userModel, userSchema);

export default userModel;
