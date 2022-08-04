const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const users = require("./user.router");
const aplication=require("./aplication.router")
const level=require("./level.router")
const soal=require("./soal.router")

router.use("/users", users);
router.use("/aplications", aplication);
router.use("/level", level);
router.use("/soal", soal);
module.exports = router;