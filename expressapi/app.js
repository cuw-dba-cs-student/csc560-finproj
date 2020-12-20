const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

require('dotenv').config();
//Middleware 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


const MONGODB_URI = 'mongodb://localhost:27017/bibms';
const HTTP_PORT = 3000;
 
 const addPapyrusRouter        = require('./routes/addPapyrus');
 const findByCenturyRouter     = require('./routes/findByCentury');
 const deletePapyrusRouter     = require('./routes/deletePapyrus');
 const getAllPapyriRouter       = require('./routes/getAllPapyri');
 const getPapyrusRouter        = require('./routes/getPapyrus');
 const findByCategoryRouter      = require('./routes/findByCategory');
 const updatePapyrusRouter     = require('./routes/updatePapyrus');
 
 
//Middleware: Route Handlers
app.use('/api/addPapyrus',addPapyrusRouter);
app.use('/api/deletePapyrus',deletePapyrusRouter);
app.use('/api/getAllPapyri', getAllPapyriRouter);
app.use('/api/getPapyrus', getPapyrusRouter);
app.use('/api/findByCategory',findByCategoryRouter);
app.use('/api/findByCentury',findByCenturyRouter);
app.use('/api/updatePapyrus',updatePapyrusRouter);

// Auth would be good to do in the future. 
//app.use(auth);



//Connect to MongoDB

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to MongoDB');
});

// Uncomment to debug.
mongoose.set('debug', true);

// listen on port defined in by HTTP_PORT in .env


let server = app.listen(HTTP_PORT, () => {
    console.log('Express is listening on port: ', server.address().port)
  })

