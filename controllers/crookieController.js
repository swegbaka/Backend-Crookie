const Food = require("../models/foodModel");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

exports.getbase = catchAsync(async (req, res, next) => {
  res.status(200).render("base");
});

exports.getcook = catchAsync(async (req, res, next) => {
  Food.find({}, function (err, foundItems) {
    res.status(200).render("icook", {
      foodName: foundItems,
    });
  });
});

// exports.getdata = catchAsync(async (req, res, next) => {
//   const queryObj = { ...req.query };
//   const beef = await Beef.find(queryObj);
//   res.status(200).render("icook", {
//     foodName: foundItems,
//   });
// });

exports.getlogin = (req, res) => {
  res
    .status(200)
    // .set("Content-Security-Policy", "connect-src 'self' http://127.0.0.1:3000/")
    .render("login", {
      title: "Log into your account",
    });
};
