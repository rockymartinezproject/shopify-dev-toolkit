import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </AppProvider>
  </React.StrictMode>,
);
