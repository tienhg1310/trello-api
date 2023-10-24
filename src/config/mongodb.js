/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { env } from '~/config/environment';

import { MongoClient, ServerApiVersion } from 'mongodb';

// khoi tao doi tuong trelloDatabaseInstance ban dau la null vi chua connent db
let trelloDatabaseInstance = null;

// khoi tao doi tuong MongoCientInstance de connet toi db
const mongoCientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// ket noi db
export const CONNECT_DB = async () => {
  await mongoCientInstance.connect();

  trelloDatabaseInstance = mongoCientInstance.db(env.DATABASE_NAME);
  trelloDatabaseInstance.listCollections;
};

export const CLOSE_DB = async () => {
  await mongoCientInstance.close();
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('connect to database first!');
  return trelloDatabaseInstance;
};
