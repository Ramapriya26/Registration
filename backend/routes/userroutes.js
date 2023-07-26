var express = require('express');
var router = express.Router();

const { datainfo } = require('../controller/usercontroller');
router.post('/', datainfo);

module.exports = router;