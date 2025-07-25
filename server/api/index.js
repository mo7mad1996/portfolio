const express = require("express");
const router = express.Router();
module.exports = router;

require("./email")(router);
