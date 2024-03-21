const express = require("express");
const morgan = require("morgan"); // Import morgan middleware
const routes = require("./routes");
const algorithm = require("./algorithm");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use morgan middleware for logging HTTP requests
app.use(morgan("dev"));

app.use("/api", routes);
app.use("/algorithm", algorithm);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
