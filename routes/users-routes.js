const express = require('express');
const usersController = require('../controllers/users-controller');
const usersRouter = express.Router();

usersRouter.get('/', usersController.loginPage)

usersRouter.get('/:id', usersController.profilePage)

usersRouter.get('/new', usersController.register)
usersRouter.post('/', usersController.userAuth)


module.exports = usersRouter;