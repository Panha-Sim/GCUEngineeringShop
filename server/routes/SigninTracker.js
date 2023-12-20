const express = require("express");
const router = express.Router();
const {currSignIn, signIn, signOut, signOutAllStudent} = require('../controllers/SigninTracker')


router.get('/', currSignIn);
router.post('/:id',signIn);
router.delete("/signallout",signOutAllStudent)
router.post('/signout/:id',signOut);

module.exports = router;