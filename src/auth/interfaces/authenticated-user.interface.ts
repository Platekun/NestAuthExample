export interface AuthenticatedUser {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly accessToken: string;
}
