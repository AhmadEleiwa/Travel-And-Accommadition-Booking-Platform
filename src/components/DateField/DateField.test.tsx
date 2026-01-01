import { describe, it, expect, vi } from "vitest";
import {screen } from "@testing-library/react";
import {render} from '../../test/render'
import { DateField } from "./DateField";
import type { DateFieldProps } from "./DateField.type";

import "@testing-library/jest-dom";

const defaultProps: DateFieldProps = {
  label: "Check In",
  value: "2026-01-01",
  setValue: vi.fn(),
};

const getters = {
  input: () => screen.getByRole("textbox") as HTMLInputElement,
  label: () => screen.queryByText(defaultProps.label),
};

describe("components/DateField", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      render(<DateField {...defaultProps} />);
      expect(getters.input()).toBeInTheDocument();
    });
  });

  describe("Props Rendering", () => {
    it("renders the correct label", () => {
      render(<DateField {...defaultProps} />);
      expect(getters.label()).toBeInTheDocument();
    });

    it("renders with different date values", () => {
      const newProps = { ...defaultProps, value: "2026-12-31" };
      render(<DateField {...newProps} />);
      expect(screen.getByDisplayValue("2026-12-31")).toBeInTheDocument();
    });
  });

  describe("Conditional Rendering", () => {
    it("renders empty label if none provided", () => {
      render(
        <DateField
          value={defaultProps.value}
          setValue={defaultProps.setValue}
          label=""
        />
      );
      expect(screen.queryByText(defaultProps.label)).not.toBeInTheDocument();
    });
  });
  describe("Basic Functionality", () => {
    it("calls setValue when user changes the date", async () => {
      const setValue = vi.fn();
      render(<DateField {...defaultProps} setValue={setValue} />);
      const input = getters.input();
      input.dispatchEvent(new Event("change", { bubbles: true }));
      setValue("2026-02-02");

      expect(setValue).toHaveBeenCalledWith("2026-02-02");
    });
  });
});
