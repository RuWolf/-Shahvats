const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    nick: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    gameId: String,
});

module.exports = mongoose.model("User", userSchema);