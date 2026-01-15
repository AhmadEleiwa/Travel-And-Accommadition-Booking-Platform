import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { render } from "../../../../test/render";
import { SearchFilters } from "./SearchFilters";
import type { SearchFilterProps } from "./SearchFilters.types";

const onChangeMock = vi.fn();

const defaultProps: SearchFilterProps = {
  filters: {
    priceMax: 500,
    stars: 5,
  },
  onChange: onChangeMock,
};

const getters = {
  resetButton: () => screen.getByRole("button", { name: /reset/i }),
  slider: () => screen.getByRole("slider"),
  starRadio: (label: string) => screen.getByLabelText(label),
};

describe("components/SearchFilters", () => {
  beforeEach(() => {
    onChangeMock.mockClear();
  });

  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      render(<SearchFilters {...defaultProps} />);

      expect(screen.getByText("Filters")).toBeInTheDocument();
      expect(screen.getByText("Max Price")).toBeInTheDocument();
      expect(screen.getByText("Star Rating")).toBeInTheDocument();
    });
  });

  describe("Props Rendering", () => {
    it("renders slider with initial price value", () => {
      render(<SearchFilters {...defaultProps} />);

      const slider = getters.slider();
      expect(slider).toBeInTheDocument();
      expect(slider).toHaveAttribute("aria-valuenow", "500");
    });

    it("renders correct initial star selection", () => {
      render(<SearchFilters {...defaultProps} />);

      const fiveStar = getters.starRadio("5+ stars");
      expect(fiveStar).toBeChecked();
    });
  });

  describe("Interactions", () => {
    it("calls onChange when reset button is clicked", async () => {
      const user = userEvent.setup();
      render(<SearchFilters {...defaultProps} />);

      await user.click(getters.resetButton());

      expect(onChangeMock).toHaveBeenCalledWith({
        priceMax: 2000,
        stars: 0,
      });
    });

    it("calls onChange when slider value changes", async () => {
      const user = userEvent.setup();
      render(<SearchFilters {...defaultProps} />);

      const slider = getters.slider();
      await user.click(slider);

      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock.mock.calls[0][0]).toMatchObject({
        priceMax: expect.any(Number),
        stars: 5,
      });
    });

    it("calls onChange when star rating changes", async () => {
      const user = userEvent.setup();
      render(<SearchFilters {...defaultProps} />);

      const fourStar = getters.starRadio("4+ stars");
      await user.click(fourStar);

      expect(onChangeMock).toHaveBeenCalledWith({
        priceMax: 500,
        stars: 4,
      });
    });
  });
});
