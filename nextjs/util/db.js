import { MongoClient } from "mongodb";

async function getDb() {
  const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
  const db = client.db(process.env.DB_ENVIRONMENT);

  return db;
}

export async function getAboutData() {
  const db = await getDb();

  const aboutData = await db
    .collection("about")
    .findOne({}, { projection: { _id: 0 } });

  return aboutData;
}

export async function getWorkData() {
  const db = await getDb();

  let workData = await db.collection("work").find().toArray();
  workData = JSON.parse(JSON.stringify(workData));

  return workData;
}
