import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let client, db;

    try {
      client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
      db = client.db("test");

      const aboutData = await db.collection("about").findOne({});

      delete aboutData._id;

      res.status(200).json(aboutData);
    } catch (error) {
      console.log(error);
    }
  }
}
