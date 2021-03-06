CREATE TABLE IF NOT EXISTS users(
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255),
    userName VARCHAR(255),
    password_digest VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS dictionary(
    id BIGSERIAL PRIMARY KEY,
    word VARCHAR(255),
    definition VARCHAR(1024),
    usage VARCHAR(1024),
    user_id INTEGER REFERENCES users(id)
)