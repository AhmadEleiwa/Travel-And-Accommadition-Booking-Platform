export type UserRole = "USER" | "ADMIN";

export interface User {
  id: string;
  username: string;
  role: UserRole;
  email: string;
  avatar?: string;
}
export interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}
