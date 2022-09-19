import { gql } from "graphql-request";

export const query = gql`
query($owner:String!, $name:String!){
    repository(owner: $owner, name: $name) {
        url
        name
        refs(first: 100, refPrefix: "refs/heads/") {
            nodes {
                name
                branchProtectionRule {
                    requiredApprovingReviewCount
                }
            }
        }
        pullRequests( first:100, states:OPEN ){
            nodes{
                    author{
                        login
                    }
                    title
                    isDraft 
                    mergeable
                    createdAt
                    reviewThreads( first:50 ){
                        nodes{
                            isResolved
                            comments( first:50 ){
                                nodes{
                                    author{
                                        login
                                    }
                                    bodyText
                                }
                                totalCount
                            }
                        }
                    }
                }
        }
    }
}
`