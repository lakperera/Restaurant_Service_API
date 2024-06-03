const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
    name: String,
    address: String,
    telephone: Number,
});

const ResturentModel = mongoose.model("Resturent",newSchema)

module.exports=ResturentModel