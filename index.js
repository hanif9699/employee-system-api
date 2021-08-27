const express= require('express');
const routes=require('./routes');
const app = express();
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session)
const setupDB=require('./db/db');
const knex=require('knex');
const config=require('./db/knexfile.js')
const passport = require('passport');
require('./config/passport');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
setupDB();
const sessionOptions = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 10000*60, // ten seconds, for testing
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
  // console.log(req.session);
  // console.log(req.user);
  // console.log(req.body)
  next();
})
app.use('/', routes);

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})