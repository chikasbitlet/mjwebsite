const express = require("express");
require("dotenv").config();

const designRoutes = require("./routes/designRoutes");

const app = express();
app.use(express.json());

app.use("/api", designRoutes);

const PORT = process.env.PORT || 5000;
app.get("/health", (req, res) => {
  res.send("API is running");
});

const sequelize = require("./config/sequelize");

sequelize.sync()
  .then(() => console.log("✅ Sequelize synced"))
  .catch(err => console.error("❌ Sequelize error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// // const connectDB = require('./config/db');

// dotenv.config();
// // connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/api/orders', require('./routes/orderRoutes'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


