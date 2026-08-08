import { MongoClient } from "mongodb";

const uri = process.env.URI;
const client = new MongoClient(uri);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

export const connect = (collection) => {
    const db = client.db(process.env.DB_NAME);
    return db.collection(collection); 
}