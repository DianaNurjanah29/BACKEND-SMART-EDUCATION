const express = require("express");
const router = express.Router();
const Controller = require("../controllers/soal.controller");

router.post('/add',Controller.addsoal);
router.get('/get',Controller.getsoal);
router.post('/getsoal',Controller.getsoalbynmr)
router.post('/cekjawaban',Controller.cekjawaban);
router.delete('/delete/:guid',Controller.deletesoal);
router.put('/update/:guid',Controller.updatesoal);

module.exports = router;