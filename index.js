const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
require('./Database/connect')

dotenv.config()

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json()) ;

require('./passport/bearer');

const client=require('./Routes/clientapi')
app.use(client)

const produit=require('./Routes/produitapi')
app.use(produit)

const commande=require('./Routes/commandeapi')
app.use(commande)


app.listen(4000, function () {
    console.log('web server listening on port 4000')
  })