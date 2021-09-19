const express = require('express');
const routes = require('./routes');
const app = express();
const session = require('express-session');
require('dotenv').config()
const knexSessionStore = require('connect-session-knex')(session)
const setupDB = require('./db/db');
const knex = require('knex');
const config = require('./db/knexfile.js')
const passport = require('passport');
const cors = require('cors')
require('./config/passport');
require('./redis')
// require('./config/passport-jwt')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
setupDB();
app.use(cors())
const sessionOptions = {
  secret: 'keyboard cat',
  cookie: {
    maxAge: 10000 * 60, // ten seconds, for testing
  },
  resave: false,
  saveUninitialized: true,
  store: new knexSessionStore({
    knex: knex(config.development),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
}
app.use(session(sessionOptions))
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  next();
})
app.use('/', routes);

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})