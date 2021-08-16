const express = require('express')
const router = express.Router()
const CourseController = require('../app/controllers/courseController')

router.get('/newest', CourseController.newestCourses)
router.get('/', CourseController.allCourses)

module.exports = router