const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const PORT = process.env.PORT || 8080;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", true);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(
    `\nserver running on port:  http://127.0.0.1:${PORT}`,
    `\nFor tours api visit: \t http://127.0.0.1:${PORT}/api/v1/tours`,
    `\nFor users api visit: \t http://127.0.0.1:${PORT}/api/v1/users`
  );
});
