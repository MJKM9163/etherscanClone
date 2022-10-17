const express = require("express");
const router = express.Router();
const { transactionCall, accountCall } = require("../controller");

router.get("/", (req, res) => {
  res.send("기본 경로!");
});

router.get("/transactions/:address", transactionCall);
// router.get("/transactions/:account", accountCall);

module.exports = router;
