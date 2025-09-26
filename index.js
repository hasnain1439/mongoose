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
  let { email, age, password } = req.body;// ✅ correct destructuring
 
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
        insertData 
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

app.get("/show-data", async (req, res) => {
  let findData = await enqueryModel.find();
  res.send({
    status: "success",
    message: "Your data successfully Fetch",
    findData
  });
});
app.delete("/delete-data/:id", async (req, res)=>{
  let deleteId = req.params.id;
  let deleteData = await enqueryModel.deleteOne({_id: deleteId});
 res.send({
    status: "success",
    message: "Your data successfully Deleted",
    id: deleteId,
    deleteData
  });
})
app.put("/update-data/:id", async(req, res)=>{
  let updataId = req.params.id;
  let { email, age, password } = req.body;// ✅ correct destructuring
  let updateData = {
    email: email,
    age : age,
    password: password
  }  
  let updatedData = await enqueryModel.updateOne({_id: updataId}, updateData ) 
  res.send({
    status: "success",
    message: "Your data successfully Updated",
    updatedData
  });
})
mongoose.connect(process.env.URL_DB).then(() => {
  console.log("database is connected");
  app.listen(process.env.PORT, () => {
    console.log("yu app is runing");
  });
});
