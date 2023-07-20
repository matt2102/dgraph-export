/** @type {import('graphql-config').IGraphQLConfig } */
module.exports = {
  projects: {
    admin: {
      schema: 'http://alpha-uri/admin',
      documents: [
        'server/Admin/*/*.ts',
        // 'server/Requests/ExportDatabase/mutations.ts'
        // 'server/mutations/RemoveDeliveryLine/mutations.ts'
      ],
      extensions: {
        codegen: {
          generates: {
            './server/admin-gql.types.ts': {
              plugins: [
                'typescript',
                'typescript-resolvers',
                'typescript-operations'
              ]
            }
          }
        }
      }
    }
  }
}
