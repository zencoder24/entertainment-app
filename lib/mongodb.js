import { MongoClient } from 'mongodb';

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

// check the MongoDB URI
if (!DATABASE_URL) {
    throw new Error('Define the DATABASE_URL environmental variable');
}

// check the MongoDB DB
if (!DATABASE_NAME) {
    throw new Error('Define the DATABASE_NAME environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(DATABASE_URL, opts);
    await client.connect();
    let db = client.db(DATABASE_NAME);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}