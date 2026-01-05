import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";

import "@testing-library/jest-dom";

import Navbar from "./Navbar";
import { render } from "../../test/render";
import type { User } from "../../features/auth";

const getters = {
  // Root / layout
  logo: () => screen.getByTestId("navbar-logo"),
  linksContainer: () => screen.getByTestId("navbar-links"),

  // Center links
  destinationsLink: () => screen.getByTestId("navbar-link-Destinations"),
  hotelsLink: () => screen.getByTestId("navbar-link-Hotels"),
  dealsLink: () => screen.getByTestId("navbar-link-Deals"),

  // User (authenticated)
  userInfo: () => screen.getByTestId("navbar-userinfo"),

  // Auth actions
  signInButton: () => screen.getByTestId("navbar-logout-button"),
};
const MOCK_USER: User = {
  username: "ahmad",
  email: "username@gmail.com",
  id: "@145",
  role: "USER",
};

const MOCK_ADMIN: User = {
  username: "ahmad",
  email: "username@gmail.com",
  id: "@145",
  role: "ADMIN",
};
describe("components/Navbar", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing when logged out", () => {
      render(<Navbar user={null} onLogout={vi.fn()} />);
    });

    it("renders without crashing when logged in", () => {
      render(<Navbar user={MOCK_USER} onLogout={vi.fn()} />);
    });
  });

  describe("Mock Rendering", () => {
    it("renders logo and navigation links", () => {
      render(<Navbar user={null} onLogout={vi.fn()} />);

      expect(getters.logo()).toBeInTheDocument();
      expect(getters.linksContainer()).toBeInTheDocument();
      expect(getters.destinationsLink()).toBeInTheDocument();
      expect(getters.hotelsLink()).toBeInTheDocument();
      expect(getters.dealsLink()).toBeInTheDocument();
    });
  });

  describe("Conditional Rendering", () => {
    it("shows sign in button when user is logged out", () => {
      render(<Navbar user={null} onLogout={vi.fn()} />);

      expect(getters.signInButton()).toBeInTheDocument();
      expect(screen.queryByTestId("navbar-userinfo")).not.toBeInTheDocument();
    });

    it("shows user info when user is logged in", () => {
      render(<Navbar user={MOCK_USER} onLogout={vi.fn()} />);

      expect(getters.userInfo()).toBeInTheDocument();
      expect(
        screen.queryByTestId("navbar-logout-button"),
      ).not.toBeInTheDocument();
    });

    it("renders admin link when user role is ADMIN", () => {
      render(<Navbar user={MOCK_ADMIN} onLogout={vi.fn()} />);

      expect(screen.getByText("Admin")).toBeInTheDocument();
    });

    it("does not render admin link when user is not ADMIN", () => {
      render(<Navbar user={MOCK_USER} onLogout={vi.fn()} />);

      expect(screen.queryByText("Admin")).not.toBeInTheDocument();
    });
  });

  describe("Basic Functionality", () => {
    it("navigates to login page when clicking sign in", async () => {
      render(
        <Routes>
          <Route path="/" element={<Navbar user={null} onLogout={vi.fn()} />} />
          <Route path="/login" element={<h1>Login Page</h1>} />
        </Routes>,
      );

      await userEvent.click(getters.signInButton());
      expect(screen.getByText("Login Page")).toBeInTheDocument();
    });

    it("calls onLogout when logout button is clicked", async () => {
      const onLogout = vi.fn();

      render(<Navbar user={MOCK_USER} onLogout={onLogout} />);

      const logoutButton = screen.getByText("Logout");
      await userEvent.click(logoutButton);

      expect(onLogout).toHaveBeenCalledOnce();
    });
  });
});
