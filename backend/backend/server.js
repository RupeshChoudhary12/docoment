const express = require('express')
const { connectDB } = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const { protect } = require('./middleware/authMiddleware')
const { getMe } = require('./controllers/userController')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000


// DB connction
connectDB();


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.get('/', (req,res) => {
    res.status(200)
    res.json({mes : "Welcome to support desk api"}
    )
})

// user Routes 

app.use('/api/user' , require("./routes/userRoutes"))

//titel


app.use('/api/ticket' , require("./routes/ticketRoutes"))

// error

app.post('/me', protect ,getMe)

app.use(errorHandler)

app.listen(PORT , () => {
    console.log(`Server is running at PORT : ${PORT}`);
})