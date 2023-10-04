const newHome = require
const blogControllers = require('../app/controllers/blogController');
const routerBlog = require('./blog')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const detailsBlog = require('./details')



function route(app) {
    app.use('/', routerBlog);
    app.use('/add', routerBlog)
    app.use('/details', detailsBlog)

}

module.exports = route;