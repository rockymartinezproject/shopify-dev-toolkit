import { Routes, Route } from "react-router-dom";
import { AppBridgeProvider, TitleBar } from "@shopify/app-bridge-react";
import { Layout, Page } from "@shopify/polaris";

import { InventoryPage } from "./pages/InventoryPage";
import { IndexPage } from "./pages/IndexPage";

const apiKey = import.meta.env.VITE_SHOPIFY_API_KEY ?? "";
const host = new URLSearchParams(window.location.search).get("host") ?? "";

export default function App() {
  return (
    <AppBridgeProvider
      config={{
        apiKey,
        host,
        forceRedirect: true,
      }}
    >
      <Page>
        <TitleBar title="Shopify Dev Toolkit" />
        <Layout>
          <Layout.Section>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
            </Routes>
          </Layout.Section>
        </Layout>
      </Page>
    </AppBridgeProvider>
  );
}
