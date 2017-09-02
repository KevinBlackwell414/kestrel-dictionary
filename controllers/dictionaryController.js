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
        console.log('Index Controller Malfunction', err)
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
        console.log('Select Controller Malfunction', err)
    })
}

dictionaryController.addWord = (req, res) => {
    res.render('dictionary/addWord')
    .catch((err) => {
        console.log('Add Controller Malfunction', err)
    })
}

dictionaryController.postWord = (req, res) => {
    Dictionary.create({
        word: req.body.word,
        definition: req.body.definition,
        usage: req.body.usage
    }, req.user.id)
    .then(dictionary => {
        res.redirect(`/dictionary/${dictionary.id}`)
    })
    .catch(err => {
        console.log('Post Controller Malfunction', err)
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
        console.log('Update Controller Malfunction', err)
    })
}

dictionaryController.removeWord = (req, res) => {
    Dictionary.destroy(req.params.id)
      .then(() => {
        res.redirect('/dictionary')
      })
      .catch(err => {
        console.log('Delete Controller Malfunction')
      });
  };

module.exports = dictionaryController