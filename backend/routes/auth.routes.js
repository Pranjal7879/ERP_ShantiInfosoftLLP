




import express from "express";
import { login, logout, changepassword } from "../controllers/auth.controller.js";
// import { requireAuth } from "../controllers/auth.controller.js";

const router = express.Router();


// router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/change-password",  changepassword); 
export default router;
