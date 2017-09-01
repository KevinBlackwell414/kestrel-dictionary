const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const usersRouter = require('./routes/users-routes');
app.use('/users', usersRouter)

const dictionaryRouter = require('./routes/dictionary-routes');
app.use('/dictionary', dictionaryRouter)

app.get('/', (req, res) => {
  res.render('users/loginPage');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});