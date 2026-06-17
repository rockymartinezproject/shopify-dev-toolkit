import type { FC } from "react";
import { Text } from "@shopify/polaris";

interface PlaceholderProps {
  label: string;
}

export const Placeholder: FC<PlaceholderProps> = ({ label }) => {
  return (
    <div className="rounded border border-dashed border-gray-300 p-6">
      <Text as="p" tone="subdued" alignment="center">
        {label}
      </Text>
    </div>
  );
};
