// build coonection between client and server

import mongoose from "mongoose";
import dotenv from 'dotenv';


// initialize dotenv
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() => {

    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@messaging-webapp.ynxhrxu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

    // const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-xzea1uk-shard-00-00.ynxhrxu.mongodb.net:27017,ac-xzea1uk-shard-00-01.ynxhrxu.mongodb.net:27017,ac-xzea1uk-shard-00-02.ynxhrxu.mongodb.net:27017/?ssl=true&replicaSet=atlas-t18jav-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp`;

    // error handing
    try { 
        // for connecting with mongodb 
       await mongoose.connect(URL) ; 
       console.log('Database connected successfully');       

    } catch (error) {
        console.log('Error while connecting with the database.', error.message);
    }
}

export default Connection;