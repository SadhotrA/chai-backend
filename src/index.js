// require('dotenv').config({path:'/env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"; // Import app

dotenv.config({
  path: "./env", // Correct path to .env file
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("mongo db connection failed !!!", error);
  });

/*
import express from "express"
const app = express()

( async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("error:",error);
      throw error
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`app is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("ERROR: ", error);
    throw error
  }
})()

*/
