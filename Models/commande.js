const mongoose=require('mongoose')
const Schema=mongoose.Schema

const CommandeSchema=new Schema({
  prix_total_de_vente:{type:String},
  la_liste_des_produits: [{ type: Schema.Types.ObjectId, ref: 'produit'}],
  la_liste_des_clients_associés: [{ type: Schema.Types.ObjectId, ref: 'client'}],
},
{
    timestamps: true, versionKey: false
  },
)
module.exports=mongoose.model('commande',CommandeSchema)