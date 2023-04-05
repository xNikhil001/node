const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require("../models/tourModel");
const data = require("../dev-data/data/tours-simple.json");

dotenv.config({ path: `./config.env` });

mongoose.set("strictQuery", true);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const importData = async () => {
  try {
    const result = await Tour.create(data);
    console.log("Data added to database");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
  process.exit();
};

const deleteData = async () => {
  try {
    const result = await Tour.deleteMany();
    console.log("Data deleted from database");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
  process.exit();
};

const connection = async () => {
  try {
    const res = await mongoose.connect(DB, options);

    switch (process.argv[2]) {
      case "--import":
        importData();
        break;
      case "--delete":
        deleteData();
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

connection();
