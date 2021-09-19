const User = require('../db/models/user');

class UserDAO {
  async findById(id) {
    const user = await User.query().findOne({ user_id: id });
    return user
  }
  register({ employee_name, password, user_role, email }) {
    const usr = User.query().findOne({ email })
    if (!usr) {
    let newUsrData = {
      employee_name,
      password,
      user_role,
      email
    }
    return User.query().insert(newUsrData);
  }
  else{
    throw new Error({
      message: 'An account already exists using this email address.',
      code: 1004
    });
  }
  }
  async findOne(data,done){
    try{
      const user=await User.query().findOne(data);
      done(null,user);
    }catch(e){
      done(e,null);
    }
  }
}

module.exports = new UserDAO();