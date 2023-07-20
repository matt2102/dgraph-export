import Startup from './Startup'
import ExportDatabase from './Admin/ExportDatabase'


export async function Server() {

    const config = await Startup()

    const {
        s3,
        alphaUri
    } = config

    const resp = await ExportDatabase({
        alphaUri: alphaUri,
        input: {
            s3BucketName: s3.uploadPath,
            secretAccessKey: s3.secretKey,
            accessKey: s3.accessKey
        }
    })
    process.exit(resp?0:1)

}

Server()