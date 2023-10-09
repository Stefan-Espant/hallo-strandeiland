import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load({ params }) {
  const { id } = params;

  let query = gql`
  query getPerson($id: ID!) {
    personen(where: {id: $id}) {
      beschrijving
      image {
        url
      }
      name
      link
      uid
      id
    }
  }
  `;

  const variables = { id };

  const request = await hygraph.request(query, variables);

  return {
      persoon: request.personen
  };
}