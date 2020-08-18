const express = require("express");
const app = express();
const mongoose = require('mongoose');

const authRoute = require("./routes/auth");

//connection with database
mongoose.connect('mongodb+srv://kiranm21:kiranm21@rest.nqiri.mongodb.net/authentication?retryWrites=true&w=majority',{ useUnifiedTopology: true , useNewUrlParser: true  },()=>{
    console.log('Connected to database');
    
})

//import routes

app.use('/api/user',authRoute);

app.listen(3000, () => {
  console.log("Server up and running");
});
