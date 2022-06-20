const sequelize = require('./connectDb');
const CategoriesInWallet = require('./categoriesInWallet');
const Category = require('./category');
const Expense = require('./expense');
const MonthWallet = require('./monthWallet');
const User = require("./user");
const Wallet = require('./wallet');

exports.createTable = async function () {

    User.hasMany(Wallet, {
        foreignKey: 'userId'
    });
    Wallet.belongsTo(User, {
        foreignKey: 'userId'
    });

    MonthWallet.belongsTo(Wallet, {
        foreignKey: 'walletId'
    });
    Wallet.hasMany(MonthWallet, {
        foreignKey: 'walletId'
    })
    MonthWallet.belongsTo(User, {
        foreignKey: 'userId'
    });
    User.hasMany(MonthWallet, {
        foreignKey: 'userId'
    })

    Category.hasMany(Expense, {
        foreignKey: 'categoryId'
    })
    Expense.belongsTo(Category, {
        foreignKey: 'categoryId'
    })

    Category.belongsToMany(Wallet, {
        through: CategoriesInWallet,
        foreignKey: 'categoryId'
    })
    Wallet.belongsToMany(Category, {
        through: CategoriesInWallet,
        foreignKey: 'walletId'
    })
    
    await sequelize.sync()
    await sequelize.sync({ alter: true })
    console.log('db Ok');
}


