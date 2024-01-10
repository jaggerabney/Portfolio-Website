import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const S3_CONFIG = {
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Step 1: get AWS key from query param
    // Step 2: init S3Client and GetObjectCommand objects
    // Step 3: use the getSignedUrl method in the AWS SDK to get a signed URL
    // Step 4: return this URL

    const key = req.query.key;
    let url;

    try {
      const client = new S3Client(S3_CONFIG);
      const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
      });

      url = await getSignedUrl(client, command);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ error });
    }

    res.status(200).json({ url });
  }
}
