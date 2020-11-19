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
  testResponse: {
    test: ServerRequest['test'];
    response: string;
  };
}
