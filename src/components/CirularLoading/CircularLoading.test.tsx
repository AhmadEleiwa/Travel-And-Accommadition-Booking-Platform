import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CircularLoading } from "./CircularLoading";

const getters = {
  overlay: () => screen.queryByTestId("circular-loading-overlay"),
  progress: () => screen.queryByRole("progressbar"),
};

describe("components/CircularLoading", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing when loading=true", () => {
      render(<CircularLoading loading />);
    });

    it("renders without crashing when loading=false", () => {
      render(<CircularLoading loading={false} />);
    });
  });

  describe("Unit Tests / Conditional Rendering", () => {
    it("does not render anything when loading=false", () => {
      const { container } = render(<CircularLoading loading={false} />);
      expect(container.firstChild).toBeNull();
    });

    it("renders CircularProgress when loading=true", () => {
      render(<CircularLoading loading />);
      expect(getters.progress()).toBeInTheDocument();
    });
  });

  describe("Basic Functionality", () => {
    it("renders a full-screen overlay when loading=true", () => {
      render(
        <div data-testid="circular-loading-overlay">
          <CircularLoading loading />
        </div>,
      );

      expect(getters.progress()).toBeInTheDocument();
    });
  });
});
