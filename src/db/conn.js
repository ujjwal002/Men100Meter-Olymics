const mongoose = require("mongoose");

const connect = async () => {
  try {
    const res = await mongoose.connect("mongodb://localhost:27017/olymics");
    console.log("connecton of nodejs with mongoose succesful");
  } catch (error) {
    console.log(error);
  }
};

connect();
