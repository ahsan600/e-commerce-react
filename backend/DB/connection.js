const mongoose = require("mongoose");
const connectDatabase=async()=> await mongoose.connect(process.env.DATA_URL);
module.exports=connectDatabase
