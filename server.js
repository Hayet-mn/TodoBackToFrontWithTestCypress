const express= require('express');
const connectDB= require('./config/db');

var cors = require('cors');

const app= express(); 
//connect database
connectDB();
//init middleware
app.use(express.json({extended: false}));
app.use(cors());

app.get('/',(req,res) =>  res.send ('API RUNNING') );

//define routes
app.use('/api/todo', require('./routes/api/todo'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server running on port ${PORT}`) );
