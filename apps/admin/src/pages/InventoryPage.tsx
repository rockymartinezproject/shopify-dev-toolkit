import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Page, Card, Button, Pagination, Banner } from "@shopify/polaris";
import {
  EmptyStateAction,
  InventoryDataTable,
  ResourceSkeleton,
  type InventoryRow,
} from "@shopify-dev-toolkit/ui-components";
import {
  GET_INVENTORY_WITH_COST,
  InventoryNode,
  flattenEdges,
  handleGraphQLErrors,
} from "@shopify-dev-toolkit/graphql-queries";

const PAGE_SIZE = 10;

export function InventoryPage() {
  const [after, setAfter] = useState<string | null>(null);
  const { data, loading, error, fetchMore } = useQuery(GET_INVENTORY_WITH_COST, {
    variables: { first: PAGE_SIZE, after },
    onError: (err) => handleGraphQLErrors(err.graphQLErrors as unknown as never[]),
  });

  const nodes = flattenEdges<InventoryNode>(data?.products);
  const rows: InventoryRow[] = nodes.flatMap((product) =>
    product.variants.edges.map(({ node: variant }) => {
      const level = variant.inventoryItem?.inventoryLevels.edges[0]?.node;
      return {
        id: variant.id,
        title: product.title,
        sku: variant.sku ?? variant.inventoryItem?.sku ?? "—",
        imageUrl: product.featuredImage?.url,
        location: level?.location.name ?? "—",
        available: level?.available ?? 0,
        cost: variant.inventoryItem?.unitCost
          ? parseFloat(variant.inventoryItem.unitCost.amount)
          : undefined,
        status: product.status.toLowerCase() as InventoryRow["status"],
      };
    }),
  );

  const pageInfo = data?.products.pageInfo;

  return (
    <Page
      title="Inventory"
      primaryAction={
        <Button onClick={() => void fetchMore({ variables: { first: PAGE_SIZE, after } })}>
          Refresh
        </Button>
      }
    >
      {error && (
        <Banner title="Failed to load inventory" tone="critical">
          {error.message}
        </Banner>
      )}

      {rows.length === 0 && !loading ? (
        <EmptyStateAction
          heading="No inventory found"
          description="Sync your catalog to see inventory levels and costs."
          actionLabel="Refresh"
          onAction={() => void fetchMore({ variables: { first: PAGE_SIZE, after: null } })}
        />
      ) : (
        <Card>
          {loading && rows.length === 0 ? (
            <ResourceSkeleton rows={PAGE_SIZE} />
          ) : (
            <>
              <InventoryDataTable rows={rows} />
              <div className="mt-4 flex justify-end">
                <Pagination
                  hasPrevious={Boolean(after)}
                  onPrevious={() => setAfter(null)}
                  hasNext={Boolean(pageInfo?.hasNextPage)}
                  onNext={() => {
                    const cursor = pageInfo?.endCursor;
                    if (cursor) {
                      setAfter(cursor);
                      void fetchMore({ variables: { first: PAGE_SIZE, after: cursor } });
                    }
                  }}
                />
              </div>
            </>
          )}
        </Card>
      )}
    </Page>
  );
}
