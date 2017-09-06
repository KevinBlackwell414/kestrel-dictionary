require('isomorphic-fetch');
require('dotenv').config();

function getQuoteFromAPI(req, res, next) {
  fetch(`http://api.urbandictionary.com/v0/define?term=kestrel`)
    .then(fetchRes => { 
      return fetchRes.json()
      next();
    })
    .then(jsonRes => {
      console.log(jsonRes.main);
      res.locals.kestrelDef = jsonRes.list[Math.floor(Math.random()*5)].definition;
      next();
    })
    .catch(err => {
      console.log(err);
      next();
    })
}

module.exports = getQuoteFromAPI