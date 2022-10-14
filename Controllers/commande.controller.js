const Commande=require('../Models/commande')




exports.getcommande=async(req,res)=>{
    const commande=await Commande.find()
    res.send(commande)
}

exports.getcommandebyid=async(req,res)=>{
    try {
        const commande=await Commande.findById(req.params.id)
        // .populate('la_liste_des_produits','la_liste_des_clients_associés')
        res.send(commande)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'erreur serveur'})
    }
}




exports.addcommande=async(req,res)=>{
    try {
       const commande = await Commande.create(req.body)
        res.send(commande) 
  
    } catch (error) {
        res.status(500).send({message:"erreur serveur"})  
    }
    
}


exports.affecteProduit = async(req,res) => {
    await Commande.findByIdAndUpdate(req.params.idCommande,{ $push: {la_liste_des_produits: req.params.idProduit}} );
    res.json('affectation avec success');
}

exports.affecteClient = async(req,res) => {
    await Commande.findByIdAndUpdate(req.params.idCommande,{ $push: {la_liste_des_clients_associés:req.params.idClient }} );
    res.json('affectation avec success');
}