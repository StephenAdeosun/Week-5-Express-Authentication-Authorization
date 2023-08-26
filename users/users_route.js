const express = require('express');
const middleware = require('./user_middleware.js');
const controller = require('./users_controllers.js');

const router = express.Router();

router.post('/', middleware.validateUser, controller.createUser);
module.exports = router;
