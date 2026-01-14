export interface LoginFormProps {
  onLogin: (user: any) => void;
}

export interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}
