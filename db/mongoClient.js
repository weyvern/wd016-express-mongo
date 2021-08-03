import { MongoClient, ObjectId } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGO_URI);

//https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connection-pooling
const pool = await mongoClient.connect();

export { pool as default, ObjectId };
