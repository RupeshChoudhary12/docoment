const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required  : true,
        resf : 'User'   ,    
    },

    title : {
        type : String,
        required : [true , "please select title"],
        enum : [ 'car ' , 'bike' , 'bus' , 'truck'],

    },
    description : {
        type : String,
        required : [true , "plaese fill the description"],
    },
    image : {
        type : String,
        required : [true , "Please file upload"]
    },

},{
   timestamps : true,
})


module.exports = mongoose.model("Ticket" , ticketSchema)