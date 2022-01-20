const model = require("../models/model.js");

const resCallback = (res, err, data, defaultErrMessage = null) => {
  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found DB`
      });
    } else {
      res.status(500).send({
        message:
          defaultErrMessage || err.message || "Internal server error"
      });
    }
  } else {
    res.send(data);
  }
};

exports.get = (req, res) => {
  model.get((err, data) => resCallback(res, err, data, "Some errors occurred while getting scores."));
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 
  // Save the score in the database
  model.create(req.body, (err, data) => resCallback(res, err, data, "Some errors occurred while adding the score."));
};
