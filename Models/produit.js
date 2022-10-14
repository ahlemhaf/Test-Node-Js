const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ProduitSchema=new Schema({
  nom:{type:String},
  description:{type:String},
  quantité:{type:String},
 prix_de_vente:{type:String}



},
{
    timestamps: true, versionKey: false
  },
)
module.exports=mongoose.model('Produit',ProduitSchema)