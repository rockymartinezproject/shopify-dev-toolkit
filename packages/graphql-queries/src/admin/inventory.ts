import { gql } from "@apollo/client";

export const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    title
    status
    featuredImage {
      id
      url
      altText
    }
  }
`;

export const INVENTORY_ITEM_FIELDS = gql`
  fragment InventoryItemFields on InventoryItem {
    id
    sku
    unitCost {
      amount
      currencyCode
    }
    inventoryLevels(first: 10) {
      edges {
        node {
          id
          available
          location {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_INVENTORY_WITH_COST = gql`
  query GetInventoryWithCost($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...ProductFields
          variants(first: 5) {
            edges {
              node {
                id
                title
                sku
                inventoryItem {
                  ...InventoryItemFields
                }
              }
            }
          }
        }
      }
    }
  }
  ${PRODUCT_FIELDS}
  ${INVENTORY_ITEM_FIELDS}
`;

export interface InventoryNode {
  id: string;
  title: string;
  status: string;
  featuredImage?: {
    id: string;
    url: string;
    altText?: string;
  } | null;
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        sku?: string;
        inventoryItem?: {
          id: string;
          sku?: string;
          unitCost?: {
            amount: string;
            currencyCode: string;
          } | null;
          inventoryLevels: {
            edges: Array<{
              node: {
                id: string;
                available: number;
                location: {
                  id: string;
                  name: string;
                };
              };
            }>;
          };
        } | null;
      };
    }>;
  };
}

export interface InventoryQueryResponse {
  products: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor?: string | null;
    };
    edges: Array<{
      cursor: string;
      node: InventoryNode;
    }>;
  };
}
