import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { RecentlyVisited } from "./RecentlyVisited";
import { render } from "../../../../test/render";
import { MOCK_HOTELS } from "../../../../constants";

// ---------------- Getters ----------------
const getters = {
  header: () => screen.getByText("Recently Visited"),
  hotelCards: () => screen.getAllByTestId("hotel--compact-ui"),
};

describe("components/RecentlyVisited", () => {
  // ---------------- Smoke Tests ----------------
  describe("Smoke Tests", () => {
    it("renders without crashing when recent list is empty", () => {
      render(<RecentlyVisited recent={[]} />);
    });

    it("renders without crashing when recent hotels exist", () => {
      render(<RecentlyVisited recent={MOCK_HOTELS} />);
    });
  });

  // ---------------- Conditional Rendering ----------------
  describe("Conditional Rendering", () => {
    it("returns null when recent list is empty", () => {
      const { container } = render(<RecentlyVisited recent={[]} />);
      expect(container.firstChild).toBeNull();
    });
  });

  // ---------------- Basic Rendering ----------------
  describe("Basic Rendering", () => {
    it("renders section title", () => {
      render(<RecentlyVisited recent={MOCK_HOTELS} />);
      expect(getters.header()).toBeInTheDocument();
    });

    it("renders correct number of hotel cards", () => {
      render(<RecentlyVisited recent={MOCK_HOTELS} />);
      expect(getters.hotelCards()).toHaveLength(MOCK_HOTELS.length);
    });
  });
});
