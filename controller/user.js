const userService = require('../service/user');

class UserController {
  async getUser(req, res, next) {
    try {
      const user = await userService.getUser(req.params.id);
      // console.log(user.verifyPassword('Badsha@123#'))
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async register(req, res, next) {
    try {
      const user = await userService.register(req.body);
      res.json(user);
    } catch (err) {
      // console.error(err);
      res.status(500).json({err:err});
    }
  }
}

module.exports = new UserController();