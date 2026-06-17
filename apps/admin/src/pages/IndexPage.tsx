import { Card, Page, Text, Layout, Button } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export function IndexPage() {
  const navigate = useNavigate();

  return (
    <Page title="Dashboard">
      <Layout>
        <Layout.Section>
          <Card>
            <Text variant="headingMd" as="h2">
              Shopify Dev Toolkit
            </Text>
            <Text as="p" tone="subdued">
              Production-ready patterns for theme development, custom apps, and inventory management.
            </Text>
            <div className="mt-4">
              <Button onClick={() => navigate("/inventory")}>View inventory</Button>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
