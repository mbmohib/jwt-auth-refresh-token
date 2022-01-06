export interface User {
  email?: string;
  name?: string;
  avatar?: string;
  role?: string;
}

export interface Auth {
  user: User;
  isAuthenticated: boolean;
  token?: string;
  expiredIn?: number;
}

export interface Token {
  data: { email: string };
  iat: number;
  exp: number;
}
