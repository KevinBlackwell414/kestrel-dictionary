const express = require('express');
const dictionaryController = require('../controllers/dictionary-controller');
const dictionaryRouter = express.Router();

dictionaryRouter.get('/', dictionaryController.index)

dictionaryRouter.get('/:id', dictionaryController.selectWord)

dictionaryRouter.get('/new', dictionaryController.addWord)
dictionaryRouter.post('/', dictionaryController.postWord)

dictionaryRouter.get('/:id/edit', dictionaryController.editWord)
dictionaryRouter.put('/:id', dictionaryController.updateWord)

dictionaryRouter.delete('/:id', dictionaryController.destroy)


module.exports = dictionaryRouter;