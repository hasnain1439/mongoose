import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import enqueryModel from "./enquery/emquery.model.js";

dotenv.config();

let app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is running");
});
app.post("/insert-data", (req, res) => {
  let { email, age, password } = req.body; // ✅ correct destructuring

  let insertData = new enqueryModel({
    email,
    age,
    password,
  });

  insertData
    .save()
    .then(() => {
      res.send({
        status: "success",
        message: "Your data successfully enter",
      });
    })
    .catch((err) => {
      res.send({
        status: "reject",
        message: "Your data isn't submitted",
        error: err,
      });
    });
});

mongoose.connect(process.env.URL_DB).then(() => {
  console.log("database is connected");
  app.listen(process.env.PORT, () => {
    console.log("yu app is runing");
  });
});
