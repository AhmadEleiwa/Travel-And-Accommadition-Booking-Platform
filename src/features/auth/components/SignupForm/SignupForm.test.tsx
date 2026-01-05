import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { SignupForm } from "./SignupForm";
import { render } from "../../../../test/render";
import type { SignupFormValues } from "./SignupForm.type";
/* ------------------------------------------------------------------ */
/* Helpers */
/* ------------------------------------------------------------------ */
const renderSignupForm = (
  onSignup: (values: SignupFormValues) => void = () => {},
) => {
  return render(<SignupForm onSignup={onSignup} />);
};

const getters = {
  usernameInput: () => screen.getByLabelText("Username"),
  emailInput: () => screen.getByLabelText("Email"),
  passwordInput: () => screen.getByLabelText("Password"),
  confirmPasswordInput: () => screen.getByLabelText("Confirm Password"),
  submitButton: () => screen.getByRole("button", { name: /sign up/i }),
};

/* ------------------------------------------------------------------ */
/* Tests */
/* ------------------------------------------------------------------ */
describe("components/SignupForm", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      renderSignupForm();
    });
  });

  describe("Unit Tests / Field Rendering", () => {
    it("renders all form fields", () => {
      renderSignupForm();

      expect(getters.usernameInput()).toBeInTheDocument();
      expect(getters.emailInput()).toBeInTheDocument();
      expect(getters.passwordInput()).toBeInTheDocument();
      expect(getters.confirmPasswordInput()).toBeInTheDocument();
    });
  });

  describe("Basic Functionality / Integration", () => {
    it("submits form with correct values", async () => {
      let submittedValues: SignupFormValues | null = null;
      const onSignup = (values: SignupFormValues) => {
        submittedValues = values;
      };

      renderSignupForm(onSignup);

      await userEvent.type(getters.usernameInput(), "johndoe");
      await userEvent.type(getters.emailInput(), "john@example.com");
      await userEvent.type(getters.passwordInput(), "password123");
      await userEvent.type(getters.confirmPasswordInput(), "password123");

      await userEvent.click(getters.submitButton());

      expect(submittedValues).toEqual({
        username: "johndoe",
        email: "john@example.com",
        password: "password123",
        confirmPassword: "password123",
      });
    });
    it("shows error if confirm password does not match password", async () => {
      renderSignupForm();

      await userEvent.type(getters.passwordInput(), "password123");
      await userEvent.type(getters.confirmPasswordInput(), "mismatch");

      await userEvent.click(getters.submitButton());

      expect(
        await screen.findByText(/passwords must match/i),
      ).toBeInTheDocument();
    });
  });
});
