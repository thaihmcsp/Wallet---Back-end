const router = require('express').Router();
const { getAllUser, createAccount, userLogin } = require('../controllers/userControllers');
const { checkLogin } = require('../middleWare/auth');
const { validateRegister, validateLogin } = require('../middleWare/validators/userValidators');
const path = require('path')
const multer  = require('multer');
const { uploadS3 } = require('../startup/S3-upload');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './publics/uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

const storage = multer.memoryStorage()

const upload = multer({ storage: storage })

router.post('/register', validateRegister, createAccount);
router.post('/login', validateLogin, userLogin)

router.get('/', checkLogin, getAllUser);

router.post('/profile', upload.single('avatar'), async function (req, res, next) {
    const result = await uploadS3(req.file)
    res.json({file: req.file, result})
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

module.exports = router;