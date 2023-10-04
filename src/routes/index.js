const express = require("express");
const router = express.Router();

const quoteController = require("../controllers/Quote");

router.post("/quotes", quoteController.createQuote);
router.get("/quotes", quoteController.getAllQuotes);
router.get("/quotes/:id", quoteController.getQuoteById);
router.patch("/quotes/:id", quoteController.updateQuote);

module.exports = router;
