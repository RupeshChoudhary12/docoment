const express = require('express');
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

router.post('/' ,registerUser)
router.post('/login' , loginUser)
// router.post('/me' ,protect,  getMe)
router.post('/me' , protect, getMe)

module.exports = router;