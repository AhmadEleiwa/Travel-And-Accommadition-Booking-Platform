import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";

import "@testing-library/jest-dom";

import FeaturedDeals from "./FeaturedDeals";
import { render } from "../../../../test/render";
import { MOCK_HOTELS } from "../../../../constants";

// Getters
const getters = {
  header: () => screen.getByText("Featured Deals"),
  description: () =>
    screen.getByText("Limited time offers in world-class accommodations."),
  viewAllLink: () => screen.getByText("View All Deals"),
  hotelCards: () => screen.getAllByTestId("hotel--featured-ui"),
  // Make sure HotelCard has data-testid="hotel-card"
};

describe("components/FeaturedDeals", () => {
  // ---------------- Smoke Tests ----------------
  describe("Smoke Tests", () => {
    it("renders without crashing with no featured hotels", () => {
      render(<FeaturedDeals featured={[]} />);
    });

    it("renders without crashing with featured hotels", () => {
      render(<FeaturedDeals featured={MOCK_HOTELS} />);
    });
  });

  // ---------------- Basic Rendering ----------------
  describe("Basic Rendering", () => {
    it("renders header, description, and view all link", () => {
      render(<FeaturedDeals featured={MOCK_HOTELS} />);

      expect(getters.header()).toBeInTheDocument();
      expect(getters.description()).toBeInTheDocument();
      expect(getters.viewAllLink()).toBeInTheDocument();
    });

    it("renders correct number of hotel cards", () => {
      render(<FeaturedDeals featured={MOCK_HOTELS} />);

      const cards = getters.hotelCards();
      expect(cards).toHaveLength(MOCK_HOTELS.length);
    });
  });

  // ---------------- Functionality / Integration ----------------
  describe("Integration / Navigation", () => {
    it("navigates to /search when clicking View All Deals", async () => {
      render(
        <Routes>
          <Route path="/" element={<FeaturedDeals featured={MOCK_HOTELS} />} />
          <Route path="/search" element={<h1>Search Page</h1>} />
        </Routes>,
      );

      await userEvent.click(getters.viewAllLink());
      expect(screen.getByText("Search Page")).toBeInTheDocument();
    });
  });
});
