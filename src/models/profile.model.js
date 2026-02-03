const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
    bio: String,
    avatar: String
}); module.exports = mongoose.model("Profile", profileSchema);
