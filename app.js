const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const PORT = process.env.PORT || 3000;

const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.users = req.users;
  next();
})

const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const usersRouter = require('./routes/users-routes');
app.use('/users', usersRouter)

const dictionaryRouter = require('./routes/dictionary-routes');
app.use('/dictionary', dictionaryRouter)

app.get('/', (req, res) => {
  res.render('users/landingPage');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});