const express=require('express')
const  passport =require('passport');
const { addcommande, getcommandebyid,affecteProduit, affecteClient, getcommande } = require('../Controllers/commande.controller');

const router=express.Router()

router.post('/commande',passport.authenticate('bearer', { session: false }),addcommande)
router.get('/commande/:id',passport.authenticate('bearer', { session: false }),getcommandebyid)
router.get('/commande',passport.authenticate('bearer', { session: false }),getcommande)

router.put('/affecte/:idCommande/produit/:idProduit',affecteProduit)
router.put('/affecte/:idCommande/client/:idClient',affecteClient)


router.get('/profile',
passport.authenticate('bearer', { session: false }),
function(req, res) {
  res.json(req.client);
});

module.exports=router