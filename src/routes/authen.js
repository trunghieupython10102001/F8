const express = require('express')
const router = express.Router()
const AuthenController = require('../app/controllers/authenController')

router.get('/login', AuthenController.toLogin)
router.post('/login', AuthenController.logined)
router.get('/logout', AuthenController.logout)
router.get('/signup', AuthenController.signup)
router.post('/signup', AuthenController.create)

module.exports = router