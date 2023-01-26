const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://alejandrogomezlla:Halozx66@cluster0.kjzcd9w.mongodb.net/test",
      {
        autoIndex: true,
      }
    );

    console.log("base de datos online");
  } catch (error) {
    throw new Error("error al conectarse a la base de datos");
  }
};
module.exports = { dbConnection };
