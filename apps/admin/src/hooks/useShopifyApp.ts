import { useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";

export function useShopifySessionToken() {
  const shopify = useAppBridge();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (shopify) {
      shopify.idToken()
        .then((t) => {
          if (!cancelled) {
            sessionStorage.setItem("shopify-access-token", t);
            setToken(t);
          }
        })
        .catch((error: unknown) => {
          // eslint-disable-next-line no-console
          console.error("Failed to retrieve Shopify session token", error);
        });
    }

    return () => {
      cancelled = true;
    };
  }, [shopify]);

  return token;
}
