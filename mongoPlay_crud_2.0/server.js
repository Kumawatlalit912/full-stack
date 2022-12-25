const express = require("express");
const app = express();
const myRouter = require("./users");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require("dotenv");
const { default: axios } = require("axios");
const { remove } = require("./models");
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
let container = [];
const data = async () => {
  await axios.get("http://localhost:3000/users").then((res) => {
    console.log(res.data);
    container = res.data;
  });
};
data();
const PORT = process.env.PORT || 5555;
app.use("/users", myRouter);
app.get("/data", (req, res) => {
  if (container.length > 0) res.send(container);
  else res.send("some error occurred");
});
app.listen(PORT, console.log(`server litening on port $(PORT)`));
