const routes = require('express').Router();
const UserController=require('../controller/user');
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
routes.get('/user/:id',UserController.getUser);
routes.post('/register', UserController.register);
routes.post('/login', passport.authenticate('local'),(req,res,next)=>{
  // console.log(req)
  res.json({userId :req.user.user_id,empName:req.user.employee_name,email:req.user.email});
  // console.log(req)
})

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

module.exports = routes;