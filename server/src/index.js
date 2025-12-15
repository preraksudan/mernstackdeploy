const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

/* ------------------ App Init ------------------ */
const app = express();

/* ------------------ Middlewares ------------------ */
app.use(cors());
app.use(express.json()); // parse JSON request bodies

/* ------------------ Database ------------------ */
const connectDB = require("./config/db");
connectDB();

/* ------------------ Routes ------------------ */
const userRoutes = require("./routes/UserRoutes");
app.use("/api/users", userRoutes);

/* ------------------ Serve Frontend ------------------ */
// public folder should be inside server/
// app.use(express.static(path.join(__dirname, "public")));

/**
 * IMPORTANT:
 * This must be AFTER API routes
 * So frontend routing doesn't override APIs
 */
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });


/* ------------------ Server ------------------ */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});