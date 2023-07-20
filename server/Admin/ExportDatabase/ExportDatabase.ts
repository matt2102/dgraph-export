import { ExportDatabaseMutation, ExportDatabaseMutationVariables } from "../../admin-gql.types"
import { graphql } from "../../graphql"
import { EXPORT_DATABASE } from "./mutations"


interface ExportDatabaseProps {
    alphaUri: string,
    input: ExportDatabaseMutationVariables
}

export async function ExportDatabase(props: ExportDatabaseProps): Promise<boolean> {
    const {
        alphaUri
    } = props
    try {
        const uri = `${alphaUri}/admin`
        const data = await graphql<ExportDatabaseMutation>(
            EXPORT_DATABASE, props.input, uri
        )
        if(data && data.export && data.export.response){
            const {code, message} = data.export.response
            if(code && message){
                console.log(code, message)
                if(code && code.toUpperCase() === 'SUCCESS'){
                    return true
                }
            }
        }
        return await false
    } catch (e) {
        console.log("mutation failed", e)
        return await false
    }

}

export default ExportDatabase