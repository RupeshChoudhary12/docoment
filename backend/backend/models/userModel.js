const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please Add Name"]
    },
    email :  {
        type : String,
        requiredd : [true , "Please Add Email"]
    },
    password : {
        type : String,
        required : [true , "Please Add password"]
    },

 
},{
    timestamps : true ,
})


module.exports = mongoose.model("User" , userSchema)