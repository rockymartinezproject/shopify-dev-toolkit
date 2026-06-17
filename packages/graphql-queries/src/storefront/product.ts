import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 4) {
        edges {
          node {
            url
            altText
          }
        }
      }
    }
  }
`;

export interface StorefrontProductResponse {
  product?: {
    id: string;
    title: string;
    description: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText?: string;
        };
      }>;
    };
  } | null;
}
