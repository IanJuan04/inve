import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;
const FIREBASE_BUCKET_URL = process.env.FIREBASE_BUCKET_URL;
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;

export default {PORT, MONGODB_URI,
                SECRET, 
                FIREBASE_BUCKET_URL, 
                FIREBASE_API_KEY, 
                FIREBASE_AUTH_DOMAIN, 
                FIREBASE_PROJECT_ID,
                FIREBASE_STORAGE_BUCKET,
                FIREBASE_MESSAGING_SENDER_ID,
                FIREBASE_APP_ID,
                };