const express = require('express')
const router = express.Router()
const AdminController = require('../app/controllers/adminController')

router.get('/courses', AdminController.courseManagement)

module.exports = router