// import { S3Client } from "@aws-sdk/client-s3";

// const s3Client = new S3Client({
//   region: "us-east-1",
//   endpoint: "http://localhost:4566",
//   credentials: { accessKeyId: "mock", secretAccessKey: "mock" },
//   forcePathStyle: true,
// });

// export const getAssetUrl = (fileName) => {
//   return `http://localhost:4566/portfolio-assets-bucket/${fileName}`;
// };
import { S3Client } from "@aws-sdk/client-s3";

// Dynamically read configuration properties from Vite's environment context
const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION || "us-east-1",
  endpoint: import.meta.env.VITE_AWS_S3_ENDPOINT,
  credentials: {
    accessKeyId: "mock-key", // Placeholder strings for LocalStack
    secretAccessKey: "mock-secret",
  },
  forcePathStyle: true, // Necessary for local routing URL structures
});

export const getAssetUrl = (fileName) => {
  const bucket = import.meta.env.VITE_AWS_S3_BUCKET_NAME;
  const endpoint = import.meta.env.VITE_AWS_S3_ENDPOINT;
  return `${endpoint}/${bucket}/${fileName}`;
};

export default s3Client;