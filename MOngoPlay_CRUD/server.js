const express = require("express");
const myRouter = require("./index");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/myrouter1", myRouter);
app.listen(port, console.log("listening on port 3000"));
