//Mongo Assigment
const mongoose = require("mongoose");

//schema defines the structure of a "todo" document in a MongoDB collection. It includes three fields
const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    deleted: Boolean
});

//Export mongoose model
module.exports = mongoose.model("Todo", TodoSchema);