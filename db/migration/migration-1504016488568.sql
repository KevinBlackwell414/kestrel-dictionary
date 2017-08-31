\connect kestrel_dictionary

CREATE TABLE IF NOT EXISTS users(
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255),
    user_name VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS dictionary(
    id BIGSERIAL PRIMARY KEY,
    word VARCHAR(255),
    definition VARCHAR(1024),
    usage VARCHAR(1024),
    user_id INTEGER
)