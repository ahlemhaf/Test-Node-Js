const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const Client = require('../Models/client');
const jwt = require("jsonwebtoken");

passport.use(new BearerStrategy((token, done) => {
    const decodedData = jwt.verify(token, 'secret');
    console.log(decodedData);
     Client.findOne({ _id: decodedData.clientId }, function (err, client) {
       if (err) { return done(err); }
       if (!client) { return done(null, false); }
       return done(null, client, { scope: 'all' });
     });
   }
 ))
 ;