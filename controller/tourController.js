const Tour = require("../models/tourModel");
const Features = require('../utils/features')

module.exports.getTours = async (req, res) => {
  try {
    const features = new Features(req.query, Tour.find());
    features.filter().sort().fields().paginate();

    const result = await features.query.exec();

    res.status(200).json({
      status: "success",
      results: result.length,
      data: { tour: result },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error });
  }
};

module.exports.createTour = async (req, res) => {
  try {
    const result = await Tour.create(req.body);
    res.status(201).json({ status: "success", data: { tour: result } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error });
  }
};

module.exports.getTour = async (req, res) => {
  try {
    const result = await Tour.findById(req.params.id);
    res.status(200).json({ status: "success", data: { tour: result } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error });
  }
};

module.exports.updateTour = async (req, res) => {
  try {
    const result = await Tour.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: "success", data: { tour: result } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error });
  }
};

module.exports.deleteTour = async (req, res) => {
  try {
    const result = await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", data: { tour: result } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error });
  }
};
