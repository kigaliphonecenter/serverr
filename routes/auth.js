const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin,
  createadmin,
  forgotPassword,
  resetPassword
} = require("../controllers/auth");
const {
  userSignupValidator
} = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.post("/createadmin", createadmin);
router.put("/forgotPassword", forgotPassword);
router.put("/resetPassword", resetPassword);
router.get("/signout", signout);

module.exports = router;