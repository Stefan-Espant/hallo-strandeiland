import { gql } from 'graphql-request';
// import { hygraph } from '$lib/utils/hygraph.js';

export async function load ({ params }) {
  const { id } = params;
  let query = gql`
    query Assets($id: id!) {
        statusUpdates(where: {id: "$id"}) {
          id
          uid
          date
          comment {
            html
          }
        }
      }
  `;
  
  const variables = { id };
      
  const res = await fetch(` `, query, variables);

  // const request = await hygraph.request(query, variables);
      console.log(request)
  return {
      status: res.status
  };
}

