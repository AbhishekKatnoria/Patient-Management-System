import * as sdk from "node-appwrite";

const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENGPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setKey(API_KEY!).setProject(PROJECT_ID!);

export const database = new sdk.Databases(client);
export const store = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const user = new sdk.Users(client);
