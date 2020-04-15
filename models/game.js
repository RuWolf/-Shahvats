const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = Schema({
    positions: Array,
    white: String,
    black: String,
});

module.exports = mongoose.model("Game", gameSchema);