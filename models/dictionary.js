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
        definition = $2,
        usage = $3
        WHERE id = $4
      `,
      [dictionary.word, dictionary.definition, dictionary.usage, id]
    )
}

Dictionary.create = (dictionary, userid) => {
    return db.one(
      `
        INSERT INTO dictionary
        (word, definition, usage, user_id)
        VALUES ($1, $2, $3, $4) RETURNING *
      `,
      [dictionary.word, dictionary.definition, dictionary.usage, userid]
    );
};

Dictionary.destroy = (id) => {
  return db.none(`
    DELETE FROM dictionary
    WHERE id = $1
  `, [id]);
};

module.exports = Dictionary;