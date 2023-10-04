const express = require('express');
const app = express();
const router = express.Router();
const Blog = require('../models/blog');
const Comment = require('../models/comments')
const bodyParser = require('body-parser')



class detailsController {
    showDetailsPost(req, res) {
        const paramsRequest = req.params;
        const blogId = parseInt(paramsRequest.id);
        const blog = Blog.getBlogById(blogId);

        // Render UI
        res.render('details', { blog });
    }

    addcommentDetailsPost(req, res) {
        const paramsRequest = req.params;
        const paramsBody = req.body;

        const nameUser = paramsBody.name;
        const comment = paramsBody.comment;
        const blogID = paramsRequest.id;

        const blogs = Blog.addComment(blogID, nameUser, comment);

        // Check if block existed
        if (!blogs) {
            res.status(404).send("Post not existed.");
            return;
        }
        res.redirect(`/details/${blogID}`);
        res.render('details', { blogs });
    }

    addComment(req, res) {
        const comment = req.body.comment;
        const name = req.body.name;
        const blogID = req.params.id;

        Comment.addComment(blogID, name, comment);
        res.redirect(`/details/${blogID}`);
    }
    editPost(req, res) {
        const blogId = req.params.id;
        const blog = Blog.getBlogById(blogId);
        if (!blog) {
            res.status(404).send("Post not existed.");
            return;
        }
        res.render('editPost', { blog });
    }
    updatePost(req, res) {
        const blogId = req.params.id;
        const updatedContent = req.body.content;
        const updatedBlog = Blog.updateBlog(blogId, updatedContent);

        if (!updatedBlog) {
            res.status(404).send('Post not existed.');
            return;
        }
        res.redirect('/');
    }

    deletePost(req, res) {
        const blogId = req.params.id;
        const deleteBlog = Blog.deleteBlog(blogId)

        if (!deleteBlog) {
            res.status(404).send('Post not existed.');
            return;
        }

        res.redirect('/');
    }
}

module.exports = new (detailsController)