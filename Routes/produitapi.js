const express=require('express')
const  passport =require('passport');
const { addproduit, getproduit, getproduitbyid, updateproduit, deleteproduit } = require('../Controllers/produit.controller');

const router=express.Router()

router.post('/produit',passport.authenticate('bearer', { session: false }),addproduit)
router.get('/produit',passport.authenticate('bearer', { session: false }),getproduit)
router.get('/produit/:id',passport.authenticate('bearer', { session: false }),getproduitbyid)
router.put('/produit/:id',passport.authenticate('bearer', { session: false }),updateproduit)
router.delete('/produit/:id',passport.authenticate('bearer', { session: false }),deleteproduit)


router.get('/profile',
passport.authenticate('bearer', { session: false }),
function(req, res) {
  res.json(req.client);
});

module.exports=router