const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next){
    //Get token from header
    const token = req.header('x-auth-token');

    //Check if not
    if(!token){
        return res.status(401).json({ masg: 'No token,authorization denied'});
    }

    //verify token
    try{
        const decode = jwt.verify(token, config.get('jwtsecret'));

        req.user = decode.user;
        next();
    }
    catch(err){
        res.status(401).json({ msg: 'Token is not valid'})
    }
}