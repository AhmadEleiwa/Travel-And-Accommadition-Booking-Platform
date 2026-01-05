import type { AuthLoginPayload, AuthLoginResponse, AuthSignupPayload, AuthSignupResponse } from "./authAPI.type";

const MOCK_USER = {
  id: "12345",
  username: "admin",
  role: "ADMIN",
  email: "john.doe@example.com",
  avatar: "https://example.com/avatar.jpg",
  password: "123456",
};

export const loginAPI = (req: AuthLoginPayload): Promise<AuthLoginResponse> => {
  // 1. Return a new Promise to simulate the async nature of a network call
  return new Promise((resolve, reject) => {
    
    // 2. Simulate a 1-second network delay
    setTimeout(() => {
      
      // 3. Logic for validation
      if (req.username !== MOCK_USER.username) {
        return reject(new Error("Invalid username"));
      }

      if (req.password !== MOCK_USER.password) {
        return reject(new Error("Invalid password"));
      }

      // 4. Success Response
      const res: AuthLoginResponse = {
        id: MOCK_USER.id,
        username: MOCK_USER.username,
        role: "USER",
        email: MOCK_USER.email,
        avatar: MOCK_USER.avatar,
        accessToken: "abc123_mock_token",
      };

      resolve(res);
    }, 2000); 
  });
};
export const signUpAPI = (req: AuthSignupPayload): Promise<AuthSignupResponse> => {
  // 1. Return a new Promise to simulate the async nature of a network call
  return new Promise((resolve, reject) => {
    
    // 2. Simulate a 1-second network delay
    setTimeout(() => {
      
      // 3. Logic for validation
      if (req.username !== MOCK_USER.username) {
        return reject(new Error("Invalid username"));
      }

      if (req.password !== MOCK_USER.password) {
        return reject(new Error("Invalid password"));
      }

      // 4. Success Response
      const res: AuthSignupResponse = {
        id: MOCK_USER.id,
        username: MOCK_USER.username,
        role: "USER",
        email: MOCK_USER.email,
        avatar: MOCK_USER.avatar,
        accessToken: "abc123_mock_token",
      };

      resolve(res);
    }, 2000); 
  });
};