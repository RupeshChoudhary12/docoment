const asyncHandler = require('express-async-handler')
const  User  = require('../models/userModel')
const Ticket = require("../models/ticketModel")

const getTickets = asyncHandler( async(req, res) => {

    const user = await User.findById(req.user.id) 

    if(!user){
        res.status(401)
        throw new Error("User not Found")
    }

    const tickets = await Ticket.find({user : req.user.id})

    res.status(200).json(tickets)

    res.send("All Tickets")
})

const getTicket = asyncHandler(async(req, res) => {
    
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error("user not found")
    }

    const ticket = await Ticket.findById(req.params.id)
    
    if(!ticket) {
        res.status(404)
        throw new Error("Ticket not Found")
    }

    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("not found")
    }

    res.status(201).json(ticket)


})
const createTicket = asyncHandler( async(req, res) => {
    const {title , description , image} = req.body

    if(!title || !description || !image) {
        res.status(400)
        throw new Error("Please fill All detali")
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error("User Not Found")
    }


    const ticket = await Ticket.create({
        user : req.user.id,
        title, 
        description,
        image,
    })

    res.status(201).json(ticket)

})
const updateTicket = asyncHandler(async(req, res) => {

    const user = await User.findById(req.user.id)

    if(!user) {
        req.status(401)
        throw new Error("User Not found")
    }

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(404)
        throw new Error("Ticket Not Found")
    }

    const updateTicket = await Ticket.findByIdAndUpdate(req.params.id , req.body , {new : true})
    res.status(200).json(updateTicket)


})
const deleteTicket = asyncHandler(async(req, res) => {
    
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error("user not found")
    }

    const ticket = await Ticket.findById(req.params.id)
    
    if(!ticket) {
        res.status(404)
        throw new Error("Ticket not Found")
    }

    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("not found")
    }


    await Ticket.findByIdAndDelete(req.params.id)
    res.status(200).json({success : true})

}
)

module.exports = {getTickets , getTicket , createTicket , updateTicket , deleteTicket}