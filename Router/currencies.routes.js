const router = require("express").Router();

const {
  getCurr,
  getSpecificCurr,
  currValue,
} = require("../controller/controller.currencies");

router.get("/", getCurr);

router.get("/:sym", getSpecificCurr);

router.get("/val", currValue);

module.exports = router;
