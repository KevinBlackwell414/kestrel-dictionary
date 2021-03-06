const express = require('express')
const authRouter = express.Router()
const passport = require('../services/auth/local')
const authHelpers = require('../services/auth/auth-helper')
const usersController = require('../controllers/usersController')

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login')
})

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register')
})

authRouter.post('/register', usersController.create)

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/dictionary',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
)

authRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = authRouter