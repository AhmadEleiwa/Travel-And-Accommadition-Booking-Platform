import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import HotelCard from "./HotelCard";

import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";
import { render } from "../../../test/render";
import { MOCK_HOTELS } from "../../../constants";
// describe('components/HotelCard', () => {
//   describe('Smoke Tests', () => {});

//   describe('Variants Rendering', () => {});

//   describe('Conditional Rendering', () => {});

//   describe('Basic Functionality', () => {});
// });

const getters = {
  compactCard: () => screen.getByTestId("hotel--compact-ui"),
  featuredCard: () => screen.getByTestId("hotel--featured-ui"),
  listCard: () => screen.getByTestId("hotel--list-ui"),
  saleBadge: () => screen.queryByTestId("hotel--featured-ui--salebadge"),
};
describe("features/hotels/HotelCard", () => {
  describe("Smoke Tests", () => {
    it("renders compact variant without crashing", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} variant="compact" />);
    });

    it("renders featured variant without crashing", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} variant="featured" />);
    });

    it("renders list variant without crashing", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} variant="list" />);
    });
  });

  describe("Variants Rendering", () => {
    it("check default variant", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} />);
      const compactElement = getters.compactCard();
      expect(compactElement).toBeInTheDocument();
    });
    it("renders compact variant when variant='compact'", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} variant="compact" />);
      const compactElement = getters.compactCard();
      expect(compactElement).toBeInTheDocument();
    });
    it("renders compact variant when variant='featured'", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} variant="featured" />);
      const featuredElement = getters.featuredCard();
      expect(featuredElement).toBeInTheDocument();
    });
    it("renders compact variant when variant='list'", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} variant="list" />);
      const listElement = getters.listCard();
      expect(listElement).toBeInTheDocument();
    });
  });
  describe("Conditional Rendering", () => {
    it("renders compact variant when variant='featured' and showSaleBadge=false ", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} variant="featured" />);
      const compactElement = getters.saleBadge();
      expect(compactElement).not.toBeInTheDocument();
    });
    it("renders compact variant when variant='featured' and showSaleBadge=true ", () => {
      render(
        <HotelCard hotel={MOCK_HOTELS[0]} showSaleBadge variant="featured" />,
      );
      const compactElement = getters.saleBadge();
      expect(compactElement).toBeInTheDocument();
    });
  });
  describe("Basic Functionality", () => {
    it("navigates to correct hotel url", () => {
      render(<HotelCard hotel={MOCK_HOTELS[0]} />);

      const link = screen.getByTestId("hotel--compact-ui");
      expect(link).toHaveAttribute("href", `/hotel/${MOCK_HOTELS[0].id}`);
    });
    it("navigates to hotel details page when clicked", async () => {
      render(
        <Routes>
          <Route path="/" element={<HotelCard hotel={MOCK_HOTELS[0]} />} />
          <Route path="/hotel/:id" element={<h1>Hotel Details</h1>} />
        </Routes>,
      );
      const link = screen.getByTestId("hotel--compact-ui");
      await userEvent.click(link);
      expect(screen.getByText("Hotel Details")).toBeInTheDocument();
    });
  });
});
