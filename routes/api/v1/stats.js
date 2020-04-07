const express = require('express');
const router = express.Router();
const statsController = require('../../../controllers/api/v1/stats');

router.get("/", statsController.getStats);

router.post("/", statsController.postStats);

router.put("/updatestats", statsController.updateStats);

module.exports = router;