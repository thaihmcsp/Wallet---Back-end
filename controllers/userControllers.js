const User = require("../models/user");
const bcrypt = require('bcrypt');

exports.getAllUser = async (req,res) => {
    try {
        const allUser = await User.findAll();
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
};

exports.createAccount = async (req,res) => {
    try {
        const {email, phone, username, password} = req.body;
        const user = await User.findOne({where: {email: email}});

        if(user){
            res.status(400).json({message: 'email is in used'});
        }else{
            const newAccount = await User.create({email, phone, username, password});
            res.status(200).json({user: newAccount});
        }
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
};

exports.userLogin = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email: email}});

        if(user && User.prototype.checkPass(user, req.body)){
            const token = User.prototype.createToken(user)
            res.status(200).json({token});
        }else{
            res.status(400).json({message: 'login fail'});
        }
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}