export interface SignupFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface SignupFormProps {
  onSignup: (values: SignupFormValues) => void;
}
