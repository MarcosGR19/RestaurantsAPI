const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
    return jwt.sign({id,email}, process.env.JWT_KEY, {expiresIn: '1h'});
}

const verifySign = (token) => {
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports ={generateSign, verifySign};