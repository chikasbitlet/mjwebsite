const express = require("express");
require("dotenv").config();
const cors = require("cors");

const sequelize = require("./config/sequelize");
const designRoutes = require("./routes/designRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", designRoutes);
app.use("/api", orderRoutes);

// Health check
app.get("/health", (req, res) => {
  res.send("Elegance by Moni API running");
});

// DB sync
sequelize
  .sync()
  .then(() => console.log("✅ Sequelize synced"))
  .catch((err) => console.error("❌ Sequelize error:", err));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
