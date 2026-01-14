import type { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type NavbarProps from "./Navbar/Navbar.type";

export const MainLayout: React.FC<PropsWithChildren & NavbarProps> = ({
  children,
  user,
  onLogout,
}) => {
  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
