const router = require("express").Router();
const Todo = require("../models/Todo");

//Get method
router.get("/", (req, res) => {
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

//Delete method
router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

module.exports = router;