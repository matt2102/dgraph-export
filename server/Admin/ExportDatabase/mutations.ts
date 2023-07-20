import { gql } from "graphql-request";


export const EXPORT_DATABASE = gql`
mutation ExportDatabase (
  $s3BucketName: String!
  $accessKey: String!
  $secretAccessKey: String!
){
  export(input: {
    destination: $s3BucketName
    accessKey: $accessKey
    secretKey: $secretAccessKey,
    format: "rdf"
  }) {
    response {
      message
      code
    }
  }
}

`