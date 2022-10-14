const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ClientSchema=new Schema({
  nom:{type:String},
  prenom:{type:String},
  email:{type:String},
  mot_de_passe:{type:String},
  role:{type:String} 



},
{
    timestamps: true, versionKey: false
  },
)
module.exports=mongoose.model('client',ClientSchema)