const Dictionary = require('../models/dictionary')

const dictionaryController = {}

dictionaryController.index = (req, res) => {
    Dictionary.findAll()
    .then ((dictionary) => {
        res.render('dictionary/index', {
            dictionary: dictionary
        })
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

dictionaryController.selectWord = (req, res) => {
    Dictionary.findById(req.params.id)
    .then((dictionary) => {
        res.render('dictionary/selectWord', {
            dictionary: dictionary
        })
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

dictionaryController.addWord = (req, res) => {
    res.render('dictionary/addWord')
}

dictionaryController.postWord = (req, res) => {
    Dictionary.postWord({
        word: req.body.word,
        definition: req.body.definition
    })
    .then(dictionary => {
        res.redirect(`/dictionary/${dictionary.id}`)
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

dictionaryController.editWord = (req, res) => {
    Dictionary.findById(req.params.id)
      .then(dictionary => {
        res.render('dictionary/editWord', { dictionary: dictionary })
    })
      .catch(err => {
        res.status(400).json(err)
    })
}

dictionaryController.updateWord = (req, res) => {
    Dictionary.update({
        word: req.body.word,
        definition: req.body.definition
      }, req.params.id)
      .then(() => {
        res.redirect(`/dictionary/${req.params.id}`)
    })
      .catch(err => {
        res.status(400).json(err);
    })
}

dictionaryController.removeWord = (req, res) => {
    Dictionary.destroy(req.params.id)
      .then(() => {
        res.redirect('/dictionary')
      })
      .catch(err => {
        res.status(400).json(err);
      });
  };