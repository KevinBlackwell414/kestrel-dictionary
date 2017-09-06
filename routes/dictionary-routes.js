const express = require('express');
const dictionaryController = require('../controllers/dictionaryController');
const dictionaryRouter = express.Router();
const authHelpers = require('../services/auth/auth-helper');
const quoteHelpers = require('../services/quote-helper')

console.log(authHelpers.loginRequired)
console.log(quoteHelpers.getQuoteFromAPI)
console.log(dictionaryController.sendAPIQuote)
console.log(dictionaryController.index)

dictionaryRouter.get('/', authHelpers.loginRequired, quoteHelpers, dictionaryController.index)

dictionaryRouter.get('/new', authHelpers.loginRequired, (req, res) => {
    res.render('dictionary/addWord')
})
dictionaryRouter.post('/', authHelpers.loginRequired, dictionaryController.postWord)

dictionaryRouter.get('/:id', authHelpers.loginRequired, dictionaryController.selectWord)

dictionaryRouter.get('/:id/editWord', authHelpers.loginRequired, dictionaryController.editWord)
dictionaryRouter.put('/:id', authHelpers.loginRequired, dictionaryController.updateWord)

dictionaryRouter.delete('/:id', authHelpers.loginRequired, dictionaryController.removeWord)


module.exports = dictionaryRouter;

