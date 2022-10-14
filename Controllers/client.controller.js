const Client=require('../Models/client')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.getclientbyid=async(req,res)=>{
    try {
        const client=await Client.findById(req.params.id)
        res.send(client)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'erreur serveur'})
    }
}

exports.register=async(req,res)=>{
    try{
     const trouve= await Client.findOne({email : req.body.email})
 
     if (trouve !==null)
     {
          res.send('email déja existe !');       
     }
    else{
     const bcrypt = require('bcryptjs');
 const salt = bcrypt.genSaltSync(10);
    req.body.mot_de_passe = bcrypt.hashSync(req.body.mot_de_passe, salt);
     await Client.create(req.body)
      .then(function(client){
        
      res.send(client)
    })
 }
    }catch(error){
     res.send('erreur serveur')
    }
   
 }
 
 exports.login = async (req, res) => {
    try {
          const client = await Client.findOne({ email: req.body.email })
          if (client !=null && ( await bcrypt.compare(req.body.mot_de_passe, client.mot_de_passe))) { 
  
             const data = {
              clientemail : client.email,
              clientId : client._id
             }
                  var token = jwt.sign(data, 'secret', { expiresIn:'1d'});
  
                   res.send({message:'connecté avec succès',token:token})
  
  
              }  
          else {
              res.send(' vérifier votre email et mot de passe')
          }
      }
      catch(err)
      {
          res.status(500).send('erreur serveur')
      }
      }

      
    exports.updateclient=async(req,res)=>{
        try {
            await Client.findByIdAndUpdate(req.params.id,req.body)
            res.send({message:'client updated'})
        } catch (error) {
            console.log(error);
            res.status(500).send({message:"erreur serveur"})  
        }
    }


    exports.deleteclient=async(req,res)=>{
        try {
            await Client.findByIdAndDelete(req.params.id)
            res.send({message:'client deleted'})
        } catch (error) {
            console.log(error);
            
        }
    }
    