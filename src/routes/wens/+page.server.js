import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {  
  let query = gql`
  query assets {
    wishes {
      id
      heading
      discription
      date
      label
    }
  }
  `

  const request = await hygraph.request(query)

  return request
  
}