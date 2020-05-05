const path = require("path");
const router = require("router");
const apiRoutes= require("./api");

router.use("/api",apiRoutes);

//if the route does not contain "/api" init, send the home page as response
router.use(function(req,res){
    res.sendFile(path.join(__dirname+"../client/build/index.html"));
});

module.exports = router;