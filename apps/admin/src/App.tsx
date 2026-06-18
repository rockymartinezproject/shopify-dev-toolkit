import { Routes, Route } from "react-router-dom";
import { Page } from "@shopify/polaris";

import { InventoryPage } from "./pages/InventoryPage";
import { IndexPage } from "./pages/IndexPage";

export default function App() {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </Page>
  );
}
