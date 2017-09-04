const express = require('express');
const dictionaryController = require('../controllers/dictionaryController');
const dictionaryRouter = express.Router();
const authHelpers = require('../services/auth/auth-helper');
const quoteHelpers = require('../services/quote-helper')

dictionaryRouter.get('/', authHelpers.loginRequired, dictionaryController.index, quoteHelpers.getQuoteFromAPI, dictionaryController.sendAPIQuote)

dictionaryRouter.get('/new', authHelpers.loginRequired, (req, res) => {
    res.render('dictionary/addWord')
})
dictionaryRouter.post('/', authHelpers.loginRequired, dictionaryController.postWord)

dictionaryRouter.get('/:id', authHelpers.loginRequired, dictionaryController.selectWord)

dictionaryRouter.get('/:id/editWord', authHelpers.loginRequired, dictionaryController.editWord)
dictionaryRouter.put('/:id', authHelpers.loginRequired, dictionaryController.updateWord)

dictionaryRouter.delete('/:id', authHelpers.loginRequired, dictionaryController.removeWord)


module.exports = dictionaryRouter;

