const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://kuber:kuber@cluster0.nqfk1ul.mongodb.net/kubercars",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
