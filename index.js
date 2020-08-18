const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//import routes

const authRoute = require("./routes/auth");
dotenv.config();



//connection with database
mongoose.connect(process.env.LINK,{ useUnifiedTopology: true , useNewUrlParser: true  },()=>{
    console.log('Connected to database');
    
})

//Middleware
app.use(express.json());

//Route middleware
app.use('/api/user',authRoute);

app.listen(3000, () => {
  console.log("Server up and running");
});
