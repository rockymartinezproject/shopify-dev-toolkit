import { useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge/utilities";

export function useShopifySessionToken() {
  const app = useAppBridge();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getSessionToken(app)
      .then((t) => {
        if (!cancelled) {
          sessionStorage.setItem("shopify-access-token", t);
          setToken(t);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Failed to retrieve Shopify session token", error);
      });

    return () => {
      cancelled = true;
    };
  }, [app]);

  return token;
}
