const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    deleted: Boolean
});

module.exports = mongoose.model("Todo", TodoSchema);