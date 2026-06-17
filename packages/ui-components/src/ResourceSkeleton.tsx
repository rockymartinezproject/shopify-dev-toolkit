import type { FC } from "react";
import { SkeletonBodyText, SkeletonDisplayText, Card } from "@shopify/polaris";

interface ResourceSkeletonProps {
  rows?: number;
}

export const ResourceSkeleton: FC<ResourceSkeletonProps> = ({ rows = 5 }) => {
  return (
    <Card>
      <div className="space-y-4">
        <SkeletonDisplayText size="small" />
        <SkeletonBodyText lines={rows} />
      </div>
    </Card>
  );
};
