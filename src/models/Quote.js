const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    enum: ["valid", "expired"],
    required: false,
  },
  totalAmount: {
    type: Number,
    required: false,
  },
  files: [
    {
      type: String, // Assuming file paths are stored as strings
    },
  ],
  tables: [
    [
      {
        type: String,
      },
    ],
  ],
});

module.exports = mongoose.model("Quote", quoteSchema);
