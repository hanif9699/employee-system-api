const crypto = require('crypto');

const generatePassword = (password) => {
    return crypto.createHash('md5').update(password).digest("hex")
}

const verifyPassword = (password, dbpassword) => {
    return crypto.createHash('md5').update(password).digest("hex") === dbpassword
}
module.exports = {
    generatePassword: generatePassword,
    verifyPassword:verifyPassword
}
