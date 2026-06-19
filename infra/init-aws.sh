#!/bin/bash
echo "########### Creating Local AWS S3 Bucket ###########"

awslocal s3 mb s3://portfolio-assets-bucket

echo "########### S3 Bucket Created Successfully! ###########"