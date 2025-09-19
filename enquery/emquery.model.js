import mongoose from "mongoose";

let enqueryScheme = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let enqueryModel = mongoose.model("Enquiry", enqueryScheme);
export default enqueryModel;