const indexRoutes = require('./routes')
const logger = require('./logger')
const session = require('express-session');
const passport = require('passport')

exports.startUp = async (app) => {
    app.use(session({secret:'test'}))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(indexRoutes)
    
}