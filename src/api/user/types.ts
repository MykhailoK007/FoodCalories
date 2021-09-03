export interface UserInfoResponse {
  id: string;
  role: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  description: string;
  phoneNumber: string;
  createdAt: string;
}

export type UpdateUserInfoBody = Partial<Omit<UserInfoResponse, 'id' | 'role'>>;

// export type
