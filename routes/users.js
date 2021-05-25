var express = require("express");
const userController = require("../controllers/users.controller.js");
var router = express.Router();

/* GET users listing. */
router.get("/getUser", userController.user);
router.get("/ping",(req,res)=>res.send('ok'))
router.get("/findOneUser/:id", userController.findOneUser);
// router.get("/getUser", ()=>{console.log('somehting................')});
router.post("/save",userController.save);

module.exports = router;
