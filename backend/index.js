require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/dbConfig");
const userRouter = require("./routes/user.routes");

// Create an Express app
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/v1/users", userRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server is running on port ${PORT}`);
});
