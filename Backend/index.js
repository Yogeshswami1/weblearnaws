import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
// import router from "./routes/reviewRoutes.js";
import router from "./routes/emailRoutes.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*' // Allow all origins; you can restrict this to your specific needs
  }));
  
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

// app.use('/api', router);
app.use('/api', router);


mongoose.connect(URL).then(()=>{

    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    })

}).catch(error => console.log(error));
