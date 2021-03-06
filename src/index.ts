/**
 * Interface for requests made to the server
 */
export interface ServerRequest {
  test?: string;
  login?: LoginMessagelet;
}

/**
 * Defines the needed information to make a login request
 */
interface LoginMessagelet {
  username: string;
  password: string;
}

/**
 * Keys of ServerRequest interface
 */
export type ServerRequestKeys = keyof ServerRequest;

/**
 * Interface for responses from the server
 */
export interface ServerResponse {
  test?: ServerRequest['test'];
  login?: string;
}
