
export interface Config {
    alphaUri: string,
    s3: S3Config,
}



export interface S3Config {
    accessKey: string;
    secretKey: string;
    uploadPath: string
}

function parseArgs(): Config {
    const args = process.argv

    const _s3: S3Config = {
        accessKey: "",
        secretKey: "",
        uploadPath: ""
    }
    let alpha = ''
    if(args.length === 0){
        return {
            alphaUri: "",
            s3: _s3
        }
    }
    for(let i = 0; i < args.length; i ++ ){
        const val = args[i]
        const s = val.toUpperCase()
        if(s.indexOf('ALPHAURI=') === 0){
            alpha = val.slice('ALPHAURI='.length)
        }
        if(s.indexOf('UPLOADPATH=') === 0){
            _s3.uploadPath = val.slice('UPLOADPATH='.length)
        }
        if(s.indexOf('ACCESSKEY=') === 0){
            _s3.accessKey = val.slice('ACCESSKEY='.length)
        }
        if(s.indexOf('SECRETKEY=') === 0){
            _s3.secretKey = val.slice('SECRETKEY='.length)
        }
    }

    return {
        alphaUri: alpha,
        s3: _s3
    }
}

function getEnvironmentVariables(): Config {
    const _s3: S3Config = {
        accessKey: "",
        secretKey: "",
        uploadPath: ""
    }
    const s = process.env.SECRET_KEY
    const a = process.env.ACCESS_KEY
    const u = process.env.UPLOAD_PATH
    const _alpha = process.env.ALPHA_URI
    let alpha = ''
    if(s && s !== ''){
        _s3.secretKey = s
    }
    if(a && a !== ''){
        _s3.accessKey = a
    }
    if(u && u !== ''){
        _s3.uploadPath = u
    }
    if(_alpha && _alpha !== ''){
        alpha = _alpha
    }
    return {
        alphaUri: alpha,
        s3: _s3
    }
}

function mask(str: string, unmaskedChars: number): string {
    const sLen = str.length
    if(str === '' || sLen <= unmaskedChars){
        return str
    }
    return '*'.repeat(sLen - unmaskedChars) + str.slice(sLen - unmaskedChars)
}


export const Startup = async (): Promise<Config> => {
    const env = getEnvironmentVariables()
    const args = parseArgs()
    const _s3Config: S3Config = {
        accessKey: args.s3.accessKey?args.s3.accessKey:env.s3.accessKey,
        uploadPath: args.s3.uploadPath?args.s3.uploadPath:env.s3.uploadPath,
        secretKey: args.s3.secretKey?args.s3.secretKey:env.s3.secretKey,
    }
    const _alpha = args.alphaUri?args.alphaUri:env.alphaUri
    let exit = false
    if(_alpha === ''){
        console.log("\nDgraph Alpha URI")
        console.log("arg ALPHA_URI required but not provided")
        console.log("ADD http://dgraph-alpha:6080")
        exit = true
    }
    if(_s3Config.uploadPath === ''){
        console.log("\nS3 Upload Path")
        console.log("arg UPLOAD_PATH required but not provided")
        console.log("ADD s3://<region>.amazonaws.com/<bucket>/<path>\n")
        exit = true
    }
    if(_s3Config.accessKey === ''){
        console.log("\nAWS Access Key")
        console.log("arg ACCESS_KEY required but not provided\n")
        exit = true
    }
    if(_s3Config.secretKey === ''){
        console.log("\nAWS Secret Key")
        console.log("arg SECRET_KEY required but not provided\n")
        exit = true
    }

    if(exit){
        process.exit(1)
    } else {
        console.log('\nDgraph Export Config')
        console.log("Dgraph Alpha: ", _alpha)
        console.log("Access Key: ", mask(_s3Config.accessKey, 4))
        console.log("S3 Upload Path: ", _s3Config.uploadPath, '\n')
    }
    return  {
        alphaUri: _alpha,
        s3: _s3Config
    }
}

export default Startup