import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { LoginForm } from "./LoginForm";
import { render } from "../../../../test/render";
const renderLoginForm = (onLogin: (values: any) => void = () => {}) => {
  return render(<LoginForm onLogin={onLogin} />);
};

const getters = {
  usernameInput: () => screen.getByLabelText("Username"),
  passwordInput: () => screen.getByLabelText("Password"),
  rememberCheckbox: () => screen.getByLabelText("Remember me"),
  submitButton: () => screen.getByRole("button", { name: /sign in/i }),
};

describe("components/LoginForm", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      renderLoginForm();
    });
  });

  describe("Unit Tests", () => {
    it("renders form fields", () => {
      renderLoginForm();

      expect(getters.usernameInput()).toBeInTheDocument();
      expect(getters.passwordInput()).toBeInTheDocument();
      expect(getters.rememberCheckbox()).toBeInTheDocument();
    });
  });

  describe("Basic Functionality", () => {
    it("submits form with user-entered values", async () => {
      let submittedValues: any = null;

      const onLogin = (values: any) => {
        submittedValues = values;
      };

      renderLoginForm(onLogin);

      await userEvent.type(getters.usernameInput(), "admin");
      await userEvent.type(getters.passwordInput(), "password123");
      await userEvent.click(getters.rememberCheckbox());
      await userEvent.click(getters.submitButton());

      expect(submittedValues).toEqual({
        username: "admin",
        password: "password123",
        remember: true,
      });
    });
  });
});
