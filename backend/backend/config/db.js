const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        const response = await mongoose.connect(process.env.MONGO_URI)
        console.log(response.connection.host)

    } catch (error) {
        console.log(error)
        
    }
    

}



module.exports = { connectDB}