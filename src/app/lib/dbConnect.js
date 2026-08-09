import { MongoClient } from "mongodb";

const uri = process.env.URI;

if (!uri) {
  throw new Error("Please define URI in your .env file");
}

const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connect(collectionName) {
  const client = await clientPromise;

  const db = client.db(process.env.DB_NAME);

  return db.collection(collectionName);
}
