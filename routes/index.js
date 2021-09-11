const routes = require('express').Router();
const UserController = require('../controller/user');
const User = require('../db/models/user');
const passport = require('passport')

routes.get('/', (req, res) => {
  const n = req.session.views || 0;
  req.session.views = n + 1;
  res.end(`${n} views`);
  // res.status(200).json({ message: 'Connected!' });
});
routes.get('/routes', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
routes.get('/user/:id', UserController.getUser);
routes.post('/register', UserController.register);
routes.post('/login', (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      res.status(401)
      res.json({error:info.message})
      return
    }
    res.json({ userId: user.user_id, empName: user.employee_name, email: user.email });
  })(req, res, next)
})

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

module.exports = routes;