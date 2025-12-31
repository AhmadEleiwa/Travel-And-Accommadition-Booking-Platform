import type { User } from "../../features/auth";

export default interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}
