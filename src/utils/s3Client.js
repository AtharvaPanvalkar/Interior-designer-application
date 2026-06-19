import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "us-east-1",
  endpoint: "http://localhost:4566",
  credentials: { accessKeyId: "mock", secretAccessKey: "mock" },
  forcePathStyle: true,
});

export const getAssetUrl = (fileName) => {
  return `http://localhost:4566/portfolio-assets-bucket/${fileName}`;
};
