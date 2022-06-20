const S3 = require('aws-sdk/clients/s3')
const path = require('path')

exports.uploadS3 = async (file) => {
    const s3 = new S3()

    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: './publics/uploads/'+Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname),
        Body: file.buffer
    }

    return await s3.upload(param).promise
}