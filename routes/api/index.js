const router = require("express").Router();
const bookRoutes = require("./books");

//Books Routes
router.use("/books",bookRoutes);

module.exports = router;