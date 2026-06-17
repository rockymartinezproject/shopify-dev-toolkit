import { Shopify } from "@shopify/shopify-api";
import type { IncomingMessage, ServerResponse } from "http";

/**
 * Example webhook handlers for Shopify Admin app.
 * Mount these in your Node server under /webhooks.
 */

export async function handleAppUninstalled(req: IncomingMessage, res: ServerResponse) {
  try {
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString();
    const { topic, shop } = await Shopify.Webhooks.Registry.process(req, body);
    // eslint-disable-next-line no-console
    console.log(`Received ${topic} webhook for ${shop}`);
    res.writeHead(200).end();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Webhook processing failed", error);
    res.writeHead(500).end();
  }
}

export async function handleProductsWebhook(req: IncomingMessage, res: ServerResponse) {
  try {
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString();
    const { topic, shop, payload } = await Shopify.Webhooks.Registry.process(req, body);
    // eslint-disable-next-line no-console
    console.log(`Received ${topic} webhook for ${shop}`, payload);
    res.writeHead(200).end();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Webhook processing failed", error);
    res.writeHead(500).end();
  }
}
