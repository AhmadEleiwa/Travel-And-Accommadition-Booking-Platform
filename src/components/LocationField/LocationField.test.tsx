import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LocationField } from "./LocationField";
import { render } from "./../../test/render";

import "@testing-library/jest-dom";

const defaultProps = {
  query: "New York",
  setQuery: vi.fn(),
};

const getters = {
  input: () => screen.getByRole("textbox") as HTMLInputElement,
};

describe("components/LocationField", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      render(<LocationField {...defaultProps} />);
      expect(getters.input()).toBeInTheDocument();
    });
  });

  describe("Props Rendering", () => {
    it("displays the initiaal query value", () => {
      render(<LocationField {...defaultProps} />);
      const input = getters.input();
      expect(input.value).toBe(defaultProps.query);
    });

    it("renders the correct placeholder", () => {
      render(<LocationField {...defaultProps} />);
      const input = getters.input();
      expect(input).toHaveAttribute(
        "placeholder",
        "Search for hotels, cities...",
      );
    });
  });

  describe("Conditional Rendering", () => {
    it("renders empty input if query is empty", () => {
      render(<LocationField query="" setQuery={vi.fn()} />);
      const input = getters.input();
      expect(input.value).toBe("");
    });
  });

  describe("Basic Functionality", () => {
    it("calls setQuery when user types in the input", async () => {
      const user = userEvent.setup();
      const setQuery = vi.fn();
      render(<LocationField query="" setQuery={setQuery} />);
      const input = getters.input();

      await user.type(input, "London");

      expect(setQuery).toHaveBeenCalledWith("L");
      expect(setQuery).toHaveBeenCalledWith("o");
      expect(setQuery).toHaveBeenCalledWith("n");
      expect(setQuery).toHaveBeenCalledWith("d");
      expect(setQuery).toHaveBeenCalledWith("o");
      expect(setQuery).toHaveBeenCalledWith("n");
    });
  });
});
