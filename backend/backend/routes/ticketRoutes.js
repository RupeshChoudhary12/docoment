const express = require('express')

const router = express.Router()

const {protect} = require('../middleware/authMiddleware')
const { getTickets, getTicket, createTicket, updateTicket, deleteTicket } = require('../controllers/ticketController')


// router.get('/' , protect , getTickets)
// router.get('/:id' , protect , getTicket)
// router.post('/create' , protect , createTicket )
// router.put('/update' , protect , updateTicket)
// router.delete('/delete ' , protect ,deleteTicket) 

// router.route("/").get(protect , getTickets , getTicket).post(protect , createTicket)

// router.route('/:id').put(protect ,updateTicket).delete(protect , deleteTicket)

router.route('/').get(protect , getTickets)
router.route('/:id')
.get(protect , getTicket)
.post(protect , createTicket)
.put(protect , updateTicket)
.delete(protect , deleteTicket)


module.exports = router;