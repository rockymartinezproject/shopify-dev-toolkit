import type { FC } from "react";
import { EmptyState } from "@shopify/polaris";

interface EmptyStateActionProps {
  heading: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

export const EmptyStateAction: FC<EmptyStateActionProps> = ({
  heading,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <EmptyState
      heading={heading}
      action={{ content: actionLabel, onAction }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      fullWidth
    >
      <p>{description}</p>
    </EmptyState>
  );
};
