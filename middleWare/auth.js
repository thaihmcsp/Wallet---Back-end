const jwt = require('jsonwebtoken');

exports.checkLogin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        if(token){
            let user = jwt.verify(token, process.env.JWT);
            req.user = user.clone.dataValues;
            delete req.user.password;
            next();
        }else{
            res.status(400).json({message: 'cannot find token'});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}