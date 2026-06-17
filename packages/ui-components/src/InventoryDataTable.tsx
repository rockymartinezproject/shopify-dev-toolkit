import type { FC } from "react";
import {
  DataTable,
  Thumbnail,
  Text,
  Link,
  Badge,
} from "@shopify/polaris";

export interface InventoryRow {
  id: string;
  title: string;
  sku: string;
  imageUrl?: string;
  location: string;
  available: number;
  cost?: number;
  status: "active" | "draft" | "archived";
}

interface InventoryDataTableProps {
  rows: InventoryRow[];
  loading?: boolean;
  onRowClick?: (id: string) => void;
}

export const InventoryDataTable: FC<InventoryDataTableProps> = ({
  rows,
  loading,
  onRowClick,
}) => {
  const rowsData = rows.map((row) => [
    <Thumbnail
      key={`${row.id}-thumb`}
      source={row.imageUrl ?? "https://cdn.shopify.com/s/images/admin/default-product.svg"}
      alt={row.title}
      size="small"
    />,
    <Link key={`${row.id}-title`} onClick={() => onRowClick?.(row.id)}>
      <Text variant="bodyMd" fontWeight="semibold" as="span">
        {row.title}
      </Text>
    </Link>,
    row.sku,
    row.location,
    row.available,
    row.cost ? `$${row.cost.toFixed(2)}` : "—",
    <Badge key={`${row.id}-status`} status={getStatusTone(row.status)}>
      {row.status}
    </Badge>,
  ]);

  return (
    <DataTable
      columnContentTypes={[
        "text",
        "text",
        "text",
        "text",
        "numeric",
        "numeric",
        "text",
      ]}
      headings={["", "Product", "SKU", "Location", "Available", "Cost", "Status"]}
      rows={rowsData}
      loading={loading}
    />
  );
};

function getStatusTone(status: InventoryRow["status"]) {
  switch (status) {
    case "active":
      return "success";
    case "draft":
      return "attention";
    case "archived":
      return "critical";
    default:
      return "default";
  }
}
