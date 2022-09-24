import { gql } from 'graphql-request'

export const query = gql`
query($limit:Int=100){
    viewer{
        repositories(first:$limit){
            nodes{
                nameWithOwner
            }
        }
    }
}
`