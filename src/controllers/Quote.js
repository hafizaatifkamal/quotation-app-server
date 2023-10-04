const Quote = require("../models/Quote");

// Controller functions
exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res
      .status(200)
      .send({ code: 200, message: "All quotes fetched", data: quotes });
  } catch (error) {
    res.status(500).send({ code: 500, message: error.message, error: error });
  }
};

exports.createQuote = async (req, res) => {
  try {
    const { name, expiryDate, status, totalAmount, files, tables } = req.body;

    const quote = new Quote({
      name,
      expiryDate,
      status,
      totalAmount,
      files,
      tables,
    });

    await quote.save();
    res.status(201).send({ code: 201, message: "Quote created!", data: quote });
  } catch (error) {
    res.status(500).send({ code: 500, message: error.message, error: error });
  }
};

exports.getQuoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findById(id);

    if (!quote) {
      return res.status(404).send({
        code: 404,
        message: "Quote not found",
        error: `Result not found for ${id}`,
      });
    }

    res.status(200).send({ code: 200, message: "Quote fetched!", data: quote });
  } catch (error) {
    res.status(500).send({ code: 500, message: error.message, error: error });
  }
};

exports.updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );

    if (!updatedQuote) {
      return res.status(404).send({
        code: 404,
        message: "Quote not found",
        error: `Result not found to be updated for ${id}`,
      });
    }

    res
      .status(200)
      .send({ code: 200, message: "Quote updated!", data: updatedQuote });
  } catch (error) {
    res.status(500).send({ code: 500, message: error.message, error: error });
  }
};

exports.deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuote = await Quote.findByIdAndDelete(id);

    if (!deletedQuote) {
      return res.status(404).send({
        code: 404,
        message: "Quote not found",
        error: `Result not found to be deleted for ${id}`,
      });
    }

    res
      .status(200)
      .send({ code: 200, message: "Quote deleted!", data: deletedQuote });
  } catch (error) {
    res.status(500).send({ code: 500, message: error.message, error: error });
  }
};
