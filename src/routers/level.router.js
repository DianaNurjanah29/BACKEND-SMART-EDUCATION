const express = require("express");
const router = express.Router();
const Controller = require("../controllers/level.controller");

router.post('/add',Controller.addlevel);
router.get('/get',Controller.getlevel)

module.exports = router;