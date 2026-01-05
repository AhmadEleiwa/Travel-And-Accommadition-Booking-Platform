import type { User } from "../auth.types";

export interface AuthLoginResponse extends User {
  accessToken: string;
}
export interface AuthLoginPayload {
  username: string;
  password: string;
}

export interface AuthSignupResponse extends AuthLoginResponse {}
export interface AuthSignupPayload {
  username: string;
  email: string;
  password:string;
}
