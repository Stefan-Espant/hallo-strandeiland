import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {  
  let query = gql`
  query wishes {
    wishes {
      heading
      date
      label
      uid
      discription
      id
    }
  }
  `

  const request = await hygraph.request(query)

  return request
  
}