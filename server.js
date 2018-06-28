const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

//define middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);
//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/reactreadinglist');

//start the app
app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`);
});
