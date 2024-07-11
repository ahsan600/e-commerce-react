require("dotenv").config();
const express = require("express");
const connectDatabase = require("./DB/connection");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: "5MB" }));
app.use(express.urlencoded({ extended: false, limit: "5MB" }));
connectDatabase().then(() => {
  console.log(`Database is Connect`);
});
app.use("/api/auth", userRoutes);
app.get("/shop",(req,res)=>{
  res.send("hi");
});
app.listen(PORT, () => {
  console.log(`Server is Listening on the ${PORT}`);
});
