const express = require('express');
const router = express.Router();
const blogControllers = require('../app/controllers/blogController');


//Router Index 
router.post('/add/newpost', blogControllers.addBlog)
router.get('/add', blogControllers.showPageCreatePost)
router.get('/', blogControllers.showBlog)

module.exports = router;