var express = require('express');
const router = express.Router();



const loginController=require('../controller/loginController')





//signup

router.post("/signup",  loginController.signUp)

//login
router.post("/login",  loginController.logIn)
//test
// router.get("/test",  loginController.test)






module.exports = router;