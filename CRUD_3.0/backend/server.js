const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

const userRoute = require("./routers/userRouter");
const dotenv = require("dotenv");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const PORT = process.env.PORT || 5555;

app.use("/users", userRoute);
app.listen(PORT, console.log(`listening on ${PORT}`));
