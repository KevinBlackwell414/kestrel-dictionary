const db = require('../db/config');

const Dictionary = {};

Dictionary.findAll = () => {
  return db.many('SELECT * FROM dictionary')
}

Dictionary.findById = id => {
    return db.oneOrNone(`SELECT * FROM dictionary WHERE id = $1`, [id])
}

Dictionary.update = (dictionary, id) => {
    return db.none(
      `
        UPDATE dictionary SET
        word = $1,
        definition = $2
        WHERE id = $3
      `,
      [dictionary.word, dictionary.definition, id]
    )
}

Dictionary.create = dictionary => {
    return db.one(
      `
        INSERT INTO dictionary
        (word, definition)
        VALUES ($1, $2) RETURNING *
      `,
      [dictionary.word, dictionary.definition]
    );
};

module.exports = Dictionary;