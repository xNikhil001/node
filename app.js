const express = require("express");
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const index = path.join(__dirname, "/public");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use(express.static(index));
module.exports = app;
