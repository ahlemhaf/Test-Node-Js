const Produit=require('../Models/produit')

exports.getproduit=async(req,res)=>{
    const produit=await Produit.find()
    res.send(produit)
}

exports.getproduitbyid=async(req,res)=>{
    try {
        const produit=await Produit.findById(req.params.id)
        res.send(produit)
    } catch (error) {
      console.log(error);
    }
  }

  exports.addproduit=async(req,res)=>{
    try {
       const produit = await Produit.create(req.body)
        res.send(produit) 


        
    } catch (error) {
        res.status(500).send({message:"erreur serveur"})  
    }
    
}

exports.updateproduit=async(req,res)=>{
    try {
        await Produit.findByIdAndUpdate(req.params.id ,req.body)
        res.send({message:'updated'})
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"erreur serveur"})  
    }
}

exports.deleteproduit=async(req,res)=>{
    try {
      await Produit.findByIdAndDelete(req.params.id)
          res.json({message:'produit deleted'})
    } catch (error) {
      console.log(error);
      res.status(500).send({message:"erreur serveur"})  
    } 
  }