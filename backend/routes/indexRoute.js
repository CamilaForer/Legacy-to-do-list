const router = require("express").Router();

router.get("/", (req, res) => {
 
      res.json("Hola mundo");

});
module.exports = router;

