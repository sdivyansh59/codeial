const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);
router.use('/posts', require('./posts'));

console.log("route user  loaded");
module.exports =router;