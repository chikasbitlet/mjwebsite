const express = require("express");
const router = express.Router();
const {
  createDesign,
  getDesigns
} = require("../controllers/designController");

router.post("/designs", createDesign);
router.get("/designs", getDesigns);

module.exports = router;
