const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./connectDb');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6s4SCIVOgCZ--nOzt4HdgdrN4JohCfh5GQ&usqp=CAU'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'email',
        validate: {
            validateEmail : function ValidateEmail(mail){
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))){
                    throw new Error('phone format error!')
                }
            }
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
    },
    totalBalance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    tableName: 'Users',
    timestamps: true,
});

// `sequelize.define` also returns the model
User.addHook('beforeSave', (user)=>{
    user.password = bcrypt.hashSync(user.password, 10);
})

User.prototype.checkPass = function(user, body){
    const check = bcrypt.compareSync(body.password, user.password);
    return check;
}

User.prototype.createToken = function(user){
    const clone = {...user};
    delete clone.password;
    const token = jwt.sign({clone}, process.env.JWT, {expiresIn: process.env.JWT_EXPIRES_IN});
    return token;
}

module.exports = User;