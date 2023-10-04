const express = require('express');
const router = express.Router();
const blogControllers = require('../app/controllers/blogController');
const detailsController = require('../app/controllers/detailsController');


//Router Index
router.delete('/delete/:id', detailsController.deletePost)
router.put('/edit/:id', detailsController.updatePost);
router.get('/edit/:id', detailsController.editPost)
router.post('/:id', detailsController.addcommentDetailsPost)
router.get('/:id', detailsController.showDetailsPost)



module.exports = router;