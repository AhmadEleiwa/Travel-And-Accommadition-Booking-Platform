export type UserRole = 'USER' | 'ADMIN'

export interface User {
  id: string;
  username: string;
  role: UserRole;
  email: string;
  avatar?: string;
}
