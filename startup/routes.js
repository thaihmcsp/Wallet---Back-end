const router = require('express').Router()
const UserRoutes = require('../routes/userRoutes')
const googleAuthRoutes = require('../routes/googleAuthRoutes')

router.use('/auth', googleAuthRoutes)
router.use('/user', UserRoutes)

module.exports = router