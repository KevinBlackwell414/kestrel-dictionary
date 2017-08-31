const Users = require('..models/users')

const usersController = {}

usersController.loginPage = ((req, res) => {
    res.render('users/loginPage')
})

usersController.profilePage = ((req, res) => {
    Users.findById(req.params.id)
    .then((user) => {
        res.render('users/profilePage', {
            user: user
        })
    })
    .catch((err) => {
        res.status(400).json(err)
    })
})

usersController.register = ((req, res) => {

})

usersController.userAuth = ((req, res) => {
    
})

module.exports = usersController