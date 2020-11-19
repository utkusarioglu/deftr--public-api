/**
 * Interface for requests made to the server
 */
export interface ServerRequest {
  test: string;
}

/**
 * Interface for responses from the server
 */
export interface ServerResponse {
  test: ServerRequest['test'];
  response: string;
}
