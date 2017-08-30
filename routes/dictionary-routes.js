const express = require('express');
const dictionaryController = require('../controllers/dictionary-controller');
const dictionaryRouter = express.Router();

dictionaryRouter.get('/', dictionaryController.index)

module.exports = dictionaryRouter;