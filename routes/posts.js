const express = require('express');

const router = express.Router();


const postsController = require('../controllers/posts_controller');

router.get('/post', postsController.posts );



console.log("route posts  loaded");
module.exports =router;