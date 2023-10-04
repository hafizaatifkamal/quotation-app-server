const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());

// Route
app.use("/api", router);
app.get("/api", (_req, res) => {
  res.send("Welcome to Quotation Application");
});

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://hafizaatifkamal:rgZ4Y6ggIF3RUVOj@quotes.noxoacq.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (err) => console.error("Database connection error: ", err));
db.once("open", () => console.log("Database connected successfully!"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app;
