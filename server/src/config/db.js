const mongoose = require('mongoose');
require("dotenv").config();


const MONGODB_URL = process.env.MONGODB_URL;


const  connectDB = async () => {

  try {
      await mongoose.connect(MONGODB_URL);
      console.log("✅ Connection is done in db.js file...");
  } catch (error) {
    console.error("❌ MongoDB connection error:", err);
    console.error(error.message);
    process.exit(1);
  }

}

connectDB().catch(err => console.log(err));
module.exports = connectDB;


/* ------------------ Mongo Client Server (to test if clients are working) ------------------ */

/*
const MONGODB_URL = process.env.MONGODB_URL;

const { MongoClient } = require('mongodb');
const client = new MongoClient(MONGODB_URL);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("📦 Databases:");
  databasesList.databases.forEach(db =>
    console.log(` - ${db.name}`)
  );
}

listDatabases(client);
*/

/* ------------------ Mongo Client Server (to test if clients are working) ------------------ */