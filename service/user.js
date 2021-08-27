const userDAO = require('../dao/user');

class UserService {
  getUser(id) {
    return userDAO.findById(id);
  }
  register(userDetail){
    try{
      return userDAO.register(userDetail)
    }catch(e){
      // console.log(JSON.stringify(e))
      // throw new Error({message:e.message,code:e.code})
    }
  }
}

module.exports = new UserService();