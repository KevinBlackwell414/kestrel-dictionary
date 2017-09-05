require('isomorphic-fetch');
require('dotenv').config();

function getQuoteFromAPI(req, res, next) {
  fetch(`http://api.urbandictionary.com/v0/define?term=kestrel`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      console.log(jsonRes.main);
      res.locals.kestrelDef = jsonRes.main;
      next();
    }).catch(err => {
      console.log(err);
      next();
    })
}

module.exports = {
  getQuoteFromAPI
}