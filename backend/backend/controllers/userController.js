const asyncHandler = require('express-async-handler')
const User = require ('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

const registerUser = asyncHandler (async (req,res) => {

    const {name , email , password} = req.body;

    if(!name || !email || !password){
        // res.status(400).json({
        //     message : "Please include All fildes",
        // })

        res.status(400)
        throw new Error("Please All Filde REqurei")
    }

    // find 

    const userExists = await User.findOne({email : email})
    if (userExists) {
        res.status(400)
        throw new Error('User Already Exists')
    }


        // has password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

            // create user 

    const user = await User.create({
        name,
        email, 
        password : hashedPassword
    })
    if(user) {
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            token : gernrateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('invaild User Data')
    }
    
});


const loginUser = asyncHandler (async (req, res) => {
    const {email , password} = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error ("Please Include All Fildes")
    }


    const user = await User.findOne({email})


    // check user password

    if(user && (await bcrypt.compare(password , user.password))){
        res.status(200).json({
            _id: user._id,
            name : user.name,
            email : user.email,
            token : gernrateToken(user._id)

        })
    }else {
        res.status(401)
        throw new Error("invalid Conditional")
    }


})


const getMe = (req,res) => {
    res.send("me Routes")
}






const gernrateToken = ( id) => {
    return jwt.sign({id}  , process.env.JWT_SECRET , {
        expiresIn : "30d"
    }) 
}



module.exports = {registerUser  , loginUser , getMe}