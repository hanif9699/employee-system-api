const routes = require('express').Router();
const UserController = require('../controller/user');
// const User = require('../db/models/user');
const passport = require('passport')
const jwt = require('jsonwebtoken');
const User = require('../dao/user')

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
  User.findOne({ email: req.body.email }, async function(err, user) {
    // console.log('passpoert',user)
    if (err) {
      res.status(401)
      res.json({ error: err })
    }
    if (!user) {
      res.status(401)
      res.json({ error: 'User doesn\'t exists' })
    }
    if (!user.verifyPassword(req.body.password)) {
      res.status(401)
      res.json({ error: 'Incorrect Password' })
    }
    const role = await user.getRole()
    const access_token = jwt.sign({ email: user.email,role:role },process.env.jwt_access_secret_key,{expiresIn:process.env.jwt_access_time})
    res.json({message:'Login sucessful',data:{access_token}})
  })
})
routes.get('/protected',passport.authenticate('jwt',{ session: false }),(req,res,next)=>{
  res.json({message:'You are authenticated'})
})
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

module.exports = routes;