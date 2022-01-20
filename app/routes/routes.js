module.exports = app => {
  const controller = require("../controllers/controller.js");

  // routes
  app.get("/get", controller.get);
  app.post("/add", controller.create);
  
};
