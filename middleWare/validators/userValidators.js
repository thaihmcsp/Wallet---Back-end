const Validator = require("fastest-validator");

const v = new Validator();

exports.validateRegister = (req, res, next) => {
    const check = v.compile({
        email: { type: "string", min: 10, max: 255, empty:false},
        phone: { type: "string", length: 10, empty:false},
        username: { type: "string", min: 8, max: 255},
        password: { type: "string", min: 8, max: 255},
    });

    const result = check(req.body);
    if(result != true){
        res.status(400).json({message: 'input not valid'});
    }else{
        next();
    }
}

exports.validateLogin = (req, res, next) => {
    const check = v.compile({
        email: { type: "string", min: 10, max: 255, empty:false},
        password: { type: "string", min: 8, max: 255},
    });
    
    const result = check(req.body);
    if(result != true){
        res.status(400).json({message: 'email, password not valid'});
    }else{
        next();
    }
}