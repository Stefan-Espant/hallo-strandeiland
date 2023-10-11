import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
import { GraphQLClient } from 'graphql-request';

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

// export async ({ body }, res) => {
//   const hygraph = new GraphQLClient(
//     'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmzz2haq024401uj3odb15mu/master',
//     {
//       headers: {
//         authorization: `Bearer ${process.env.HYGRAPH_KEY}`,
//       },
//     }
//   );
//   const now = new Date();
//   console.log(now);
//   const { createReaction } = await hygraph.request(
//     `mutation upvoteProduct($id: ID!) {
//       createVote(data: { product: { connect: { id: $id } } }) {
//         id
//       }
//     }
//     mutation MyMutation($id: ID!) {
//       createReaction(data: { date: , fullname: " ", submitField: " "}) {
//         date
//         fullname
//         submitField
//         id
//       }
//     }`,
//     { id: body.id }
//   );

//   await hygraph.request(
//     `mutation publishUpvote($id: ID!) {
//       publishVote(where: { id: $id }, to: PUBLISHED) {
//         id
//       }
//     }`,
//     { id: createReaction.id }
//   );

//   res.status(201).json({ id: createReaction.id });
// };