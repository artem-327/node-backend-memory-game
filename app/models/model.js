const client = require("./db.js");

const model = function() {
  this.name = "Game Score";
}

model.get = async (result) => {
  try {    
    const res = await client.query(
      "SELECT * FROM score"
    );
    result(null, res.rows);
  } catch (err) {
    result(err, null);
  };
};

model.create = async (newScore, result) => {
  try {
    const res = await client.query(
      "INSERT INTO score VALUES ('" + newScore.name + "', '" + newScore.difficulty + "', '" + newScore.timeSpent + "', NOW())"
    );
    result(null, { ...newScore, status: "ok" });
  } catch (err) {
    result(err, null);
  };
};

module.exports = model;
