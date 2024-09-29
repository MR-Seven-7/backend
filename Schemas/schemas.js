const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    name: String,
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    bio: String,
    location: String,
    gender: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Users" }
);
const Users = mongoose.model("Users", userDetailsSchema);

module.exports = { Users };
