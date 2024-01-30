// const express = require('express'); for import express , we used this in previous version(this is the old syntex of node js). but we use :

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Connection from './Database/db.js';
import route from './routes/Route.js';


// initialise as a function
const app = express();


app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use('/', route)
Connection();

// create server
const PORT= 5000;
app.listen(PORT, () => console.log(`server is runing successfully on PORT ${PORT}`))