export interface SignInBody {
  email: string;
  password: string;
}
export interface SignUpBody {
  username: string;
  email: string;
  password: string;
}
export interface AuthResponse {
  access_token: string;
}
