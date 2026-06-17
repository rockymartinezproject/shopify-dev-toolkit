export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
}

export interface Edge<T> {
  cursor: string;
  node: T;
}

export interface PaginatedResponse<T> {
  pageInfo: PageInfo;
  edges: Edge<T>[];
}

export function flattenEdges<T>(response?: PaginatedResponse<T> | null): T[] {
  if (!response) return [];
  return response.edges.map((edge) => edge.node);
}

export function getNextPageVariables(pageSize: number, endCursor?: string | null) {
  return {
    first: pageSize,
    after: endCursor ?? null,
  };
}

export function getPreviousPageVariables(pageSize: number, startCursor?: string | null) {
  return {
    last: pageSize,
    before: startCursor ?? null,
  };
}
