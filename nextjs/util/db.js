import { MongoClient } from "mongodb";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand
} from "@aws-sdk/client-s3";
import matter from "gray-matter";

const s3config = {
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY
  }
};

async function getDb() {
  const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
  const db = client.db(process.env.DB_ENVIRONMENT);

  return { client, db };
}

export async function getAboutData() {
  const { client, db } = await getDb();

  const aboutData = await db
    .collection("about")
    .findOne({}, { projection: { _id: 0 } });

  await client.close();
  return aboutData;
}

export async function getWorkData() {
  const { client, db } = await getDb();

  let workData = await db.collection("work").find().toArray();
  workData = JSON.parse(JSON.stringify(workData));

  await client.close();
  return workData;
}

export async function getBlogPostNames() {
  const client = new S3Client(s3config);
  const command = new ListObjectsV2Command({
    Bucket: process.env.S3_BUCKET_NAME,
    MaxKeys: 1000
  });

  let postNames = [];

  try {
    const { Contents } = await client.send(command);

    for (const file of Contents) {
      if (file.Key.startsWith("blog/") && file.Size > 0) {
        postNames.push(file.Key);
      }
    }
  } catch (error) {
    console.log(error);
  }

  client.destroy();
  return postNames;
}

export async function getBlogPost(postName) {
  const client = new S3Client(s3config);
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: postName
  });

  let text;

  try {
    const response = await client.send(command);
    text = await response.Body.transformToString();
  } catch (error) {
    console.log(error);
  }

  const slug = postName.substring(
    "/blog".length,
    postName.length - ".md".length
  );
  const { data, content } = matter(text);

  client.destroy();
  return { slug, ...data, content };
}

export async function getBlogData() {
  const postNames = await getBlogPostNames();

  console.log(`Post names: ${postNames}`);

  const posts = await Promise.all(postNames.map(getBlogPost));
  const sortedPosts = posts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );

  return sortedPosts;
}
