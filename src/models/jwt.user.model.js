const mongoose = require("mongoose");

const jwtUserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model("JwtUser", jwtUserSchema);