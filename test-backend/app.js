const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./routes/Users');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
  })
const initiateMongo = async() =>{
    try {
        // IvivKqAIBXHybOys
        await mongoose.connect('mongodb+srv://boulgouAbdeslam:IvivKqAIBXHybOys@cluster0.btoaq.mongodb.net/test-strategin?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true
        });
        console.log("Connected to mongodb")
    } catch (error) {
        console.log(error)
    }

}
initiateMongo();
app.use('/api/auth', User);

module.exports = app;