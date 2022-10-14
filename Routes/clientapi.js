const express=require('express')
const  passport =require('passport');
const { register, login, getclientbyid, updateclient, deleteclient } = require('../Controllers/client.controller');

const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/client/:id',getclientbyid)
router.put('/client/:id',updateclient)
router.delete('/client/:id',deleteclient)


router.get('/profile',
passport.authenticate('bearer', { session: false }),
function(req, res) {
  res.json(req.client);
});



module.exports=router