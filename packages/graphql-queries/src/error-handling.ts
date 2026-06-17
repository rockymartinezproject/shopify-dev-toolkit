export class ShopifyGraphQLError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly extensions?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "ShopifyGraphQLError";
  }
}

export interface GraphQLResponseError {
  message: string;
  locations?: Array<{ line: number; column: number }>;
  path?: Array<string | number>;
  extensions?: Record<string, unknown>;
}

export function handleGraphQLErrors(errors?: GraphQLResponseError[]): void {
  if (!errors || errors.length === 0) return;

  const firstError = errors[0]!;
  throw new ShopifyGraphQLError(
    firstError.message,
    (firstError.extensions?.code as string) ?? "UNKNOWN_ERROR",
    firstError.extensions,
  );
}
