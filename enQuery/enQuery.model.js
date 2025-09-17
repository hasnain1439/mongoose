import mongoose from "mongoose";

let enQuerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: {
        type: Number,
        required: true
    }, 
    email: {
        type:String,
        required: true
    }
})
let enQueryModel = mongoose.model("userInfo", enQuerySchema)
export default enQueryModel;