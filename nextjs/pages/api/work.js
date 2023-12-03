import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let client, db;

    try {
      client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
      db = client.db("test");

      const workData = await db.collection("work").find().toArray();

      res.status(200).json(workData);
    } catch (error) {
      console.log(error);
    }
  }
}
