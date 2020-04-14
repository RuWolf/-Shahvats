const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = Schema({
    positions: Array,
    password: { type: String, required: true },
    gameId: String,
});

module.exports = mongoose.model("Game", gameSchema);