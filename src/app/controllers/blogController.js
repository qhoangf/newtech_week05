const express = require('express');
const app = express();
const router = express.Router();
const Blog = require('../models/blog');
const bodyParser = require('body-parser')

class HomeController {
    // Show newfeeds list
    showBlog(req, res) {
        const blogs = Blog.getAllBlogs();
        // Render UI
        res.render('home', { blogs });
    }
    showPageCreatePost(req, res) {
        res.render('createPost')
    }
    addBlog(req, res) {
        if (req.body.content) {
            console.log(req.body.content)
            const newBlog = Blog.createBlog(req.body.content);

            // Check data
            console.log(newBlog);

            // Return Home
            res.redirect('/');
        } else {
            res.status(400).send('Invalid content');
        }
    }
}


module.exports = new HomeController();