import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {  
  let query = gql`
  query wishes {
    wishes {
      heading
    }
  }
  `

  const request = await hygraph.request(query)
  console.log(request)

  return request
  
}