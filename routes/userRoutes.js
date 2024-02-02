import express from "express";
import {  changePassword,  getMyProfile, login, logout, register,  updateProfile } from "../controllers/userController.js";
import {  isAuthenticated } from "../middlewares/auth.js";
  

const router = express.Router();
// to register new user
router.route("/register").post(register);

//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);

//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

  

//changepassword
router.route("/changepassword").put(isAuthenticated, changePassword);

//update profile
router.route("/updateprofile").put(isAuthenticated,updateProfile);

 


 



export default router;