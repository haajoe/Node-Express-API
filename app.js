require('dotenv').config();
const express = require("express");
const app = express();
const db = require('./db/database');


//CONNECT TO DB
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySQL Connected...')
})


//IMPORT ROUTES
const clientsRoutes = require('./routes/clients');
const ctmRoutes = require('./routes/ctm-data');

//MIDDLEWARE
app.use('/clients', clientsRoutes);
app.use('/ctm-data', ctmRoutes);


// CONNECT TO SERVER
app.listen(process.env.PORT, () => {
  console.log("Server is up and running...");
});




