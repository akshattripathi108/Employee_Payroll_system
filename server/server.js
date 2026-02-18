require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.get("/test", (req, res) => {
  res.send("API working");
});
app.use(cors());
app.use(express.json());   // ⭐ REQUIRED

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));
