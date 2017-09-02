const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const authHelpers = require('../services/auth/auth-helper');

usersRouter.get('/', authHelpers.loginRequired, usersController.index);

module.exports = usersRouter;