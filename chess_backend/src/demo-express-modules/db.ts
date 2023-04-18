import { Db, MongoClient } from 'mongodb';

export let mongo: MongoClient
export let db: Db

if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
  throw new Error('WARNING: Suivez les instructions du README afin de setup les variables d\'env Mongo')
}

export async function initMongoDb() {
  if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) return;
  mongo = new MongoClient(process.env.MONGO_URI)
  await mongo.connect()
  db = mongo.db(process.env.MONGO_DB_NAME)
}
