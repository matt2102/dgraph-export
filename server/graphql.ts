import { DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";

export async function graphql<T>(
    query: string|DocumentNode,
    variables?: Record<string, any>,
    uriOverride?: string
    ): Promise<T> {
    const getEndpointURI = () => {
        if(uriOverride && typeof uriOverride === 'string'){
            return uriOverride
        }
        return `${process.env.DGRAPH_URL}/graphql`
    }
    const uri = getEndpointURI()
    const headers = new Headers()
    headers.append("Content-type", "application/json")

    const client = new GraphQLClient(uri, {
        headers: headers,
        errorPolicy: 'ignore'
    })
    const response = await client.request(query, variables)
    return response as T
}