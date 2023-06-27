import { config } from 'dotenv';

config();
const DB_URI = 'mongodb+srv://zachmizrachi:Zach0515orbslam2@cluster0.qewle7v.mongodb.net/'
console.log(DB_URI);

import { MongoClient } from 'mongodb';

export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

 export async function findStudentsByName(collection, name) {
    return collection.find({ name }).toArray();
 }

 export async function executeStudentCrudOperations() {
    const uri = DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db("WorkoutDatabase");
        const collection = db.collection('WorkoutDB');

        const cursor = collection.find({});
        await cursor.forEach(document => {
          const armAngle = document['Arm Angle'];
          console.log(armAngle);
        });


    } finally {
        await mongoClient.close();
    }
 }

 await executeStudentCrudOperations();

