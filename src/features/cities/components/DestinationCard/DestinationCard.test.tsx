import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";

import "@testing-library/jest-dom";

import { DestinationCard } from "./DestinationCard";
import { render } from "../../../../test/render";
import { MOCK_CITIES } from "../../../../constants";

// ---------------- Mock Data ----------------
const MOCK_CITY = MOCK_CITIES[0];

// ---------------- Getters ----------------
const getters = {
  cityName: () => screen.getByText(MOCK_CITY.name),
  countryName: () => screen.getByText(MOCK_CITY.country),
  image: () => screen.getByAltText(MOCK_CITY.name),
  link: () => screen.getByRole("link"),
};

describe("components/DestinationCard", () => {
  // ---------------- Smoke Tests ----------------
  describe("Smoke Tests", () => {
    it("renders without crashing without link", () => {
      render(<DestinationCard city={MOCK_CITY} />);
    });

    it("renders without crashing with link", () => {
      render(<DestinationCard city={MOCK_CITY} linkTo="/destinations/paris" />);
    });
  });

  // ---------------- Basic Rendering ----------------
  describe("Basic Rendering", () => {
    it("renders city name and country", () => {
      render(<DestinationCard city={MOCK_CITY} />);

      expect(getters.cityName()).toBeInTheDocument();
      expect(getters.countryName()).toBeInTheDocument();
    });

    it("renders city image with correct src and alt", () => {
      render(<DestinationCard city={MOCK_CITY} />);

      const img = getters.image();
      expect(img).toHaveAttribute("src", MOCK_CITY.thumbnail);
      expect(img).toHaveAttribute("alt", MOCK_CITY.name);
    });
  });

  // ---------------- Conditional Rendering ----------------
  describe("Conditional Rendering", () => {
    it("does NOT render a link when linkTo is not provided", () => {
      render(<DestinationCard city={MOCK_CITY} />);

      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("wraps card in a link when linkTo is provided", () => {
      render(
        <Routes>
          <Route
            path="/"
            element={
              <DestinationCard city={MOCK_CITY} linkTo="/destinations/paris" />
            }
          />
        </Routes>,
      );

      const link = getters.link();
      expect(link).toHaveAttribute("href", "/destinations/paris");
    });
  });

  // ---------------- Integration / Navigation ----------------
  describe("Integration / Navigation", () => {
    it("navigates to destination page when card is clicked", async () => {
      render(
        <Routes>
          <Route
            path="/"
            element={
              <DestinationCard city={MOCK_CITY} linkTo="/destinations/paris" />
            }
          />
          <Route
            path="/destinations/paris"
            element={<h1>Paris Destination Page</h1>}
          />
        </Routes>,
      );

      await userEvent.click(getters.link());
      expect(screen.getByText("Paris Destination Page")).toBeInTheDocument();
    });
  });
});
