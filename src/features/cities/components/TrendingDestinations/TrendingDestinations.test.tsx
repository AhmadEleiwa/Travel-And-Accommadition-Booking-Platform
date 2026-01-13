import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";

import "@testing-library/jest-dom";

import { TrendingDestinations } from "./TrendingDestinations";
import { render } from "../../../../test/render";
import { MOCK_CITIES } from "../../../../constants";

// ---------------- Mock Data ----------------
const MOCK_TRENDING = MOCK_CITIES.slice(0, 4);

// ---------------- Getters ----------------
const getters = {
  header: () => screen.getByText("Trending Destinations"),
  description: () =>
    screen.getByText("The most visited cities by our community this month."),
  cards: () => screen.getAllByTestId("destination-card"),
};

describe("components/TrendingDestinations", () => {
  // ---------------- Smoke Tests ----------------
  describe("Smoke Tests", () => {
    it("renders without crashing with empty trending list", () => {
      render(<TrendingDestinations trending={[]} />);
    });

    it("renders without crashing with trending destinations", () => {
      render(<TrendingDestinations trending={MOCK_TRENDING} />);
    });
  });

  // ---------------- Basic Rendering ----------------
  describe("Basic Rendering", () => {
    it("renders header and description", () => {
      render(<TrendingDestinations trending={MOCK_TRENDING} />);

      expect(getters.header()).toBeInTheDocument();
      expect(getters.description()).toBeInTheDocument();
    });

    it("renders correct number of destination cards", () => {
      render(<TrendingDestinations trending={MOCK_TRENDING} />);

      expect(getters.cards()).toHaveLength(MOCK_TRENDING.length);
    });
  });

  // ---------------- Integration / Navigation ----------------
  describe("Integration / Navigation", () => {
    it("navigates to search page when clicking a destination card", async () => {
      render(
        <Routes>
          <Route
            path="/"
            element={<TrendingDestinations trending={MOCK_TRENDING} />}
          />
          <Route path="/search" element={<h1>Search Page</h1>} />
        </Routes>
      );

      await userEvent.click(getters.cards()[0]);
      expect(screen.getByText("Search Page")).toBeInTheDocument();
    });
  });
});
