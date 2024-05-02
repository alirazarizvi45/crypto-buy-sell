const dotenv = require("dotenv");
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile });

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const sequelize = require("./src/config/sequelize");
const Users = require("./src/models/User");
const path = require("path");
const passport = require("./src/config/passport");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.static("../dist")); // Serve frontend
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Session middleware for Passport
app.use(
  session({
    secret: "secret",
    // secret: process.env.SESSION_SECRET, // Provide secret option to avoid deprecation warning
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
let allRoutes = require("./src/Routes/index");
app.use(allRoutes);

// Error handler middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ status: false, data: error });
});

// Serve frontend for all routes (for SPA)
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Main function
let main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Database");
    await Users.sync();
    console.log("Models synchronized successfully");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  main();
});
