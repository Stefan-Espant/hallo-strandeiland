import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load({ params }) {
  const { id } = params;

  let query = gql`
    query getWish($id: ID!) {
      wish(where: { id: $id }) {
        id
        heading
        description
        date
        label
        image {
          url
        }
      }
    }
  `;

  const variables = { id };

  const request = await hygraph.request(query, variables);

  return {
      wish: request.wish // Hier halen we de enkele wens op
  };
}
