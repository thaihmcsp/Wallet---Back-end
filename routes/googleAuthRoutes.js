const router = require('express').Router()
const passport = require('passport')

router.get('/googleLogin', (req,res)=>{
    res.send('<a class="button google" href="/auth/login/federated/google">Sign in with Google</a>')
})

router.get('/login/federated/google',
    passport.authenticate('google', { scope:[ 'email', 'profile' ] }
));

router.get('/google/callback',
    passport.authenticate( 'google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
}));

router.get('/google/success', (req, res)=>{
    res.json('success')
})
router.get('/google/failure', (req, res)=>{
    res.json('failure')
})

module.exports = router