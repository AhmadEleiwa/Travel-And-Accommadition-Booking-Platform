import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { render } from "../../../../test/render";
import { SearchHotelList } from "./SearchHotelList";
import type { SearchHotelListProps } from "./SearchHotelList.types";
import { MOCK_HOTELS } from "@/constants";

const mockHotels = MOCK_HOTELS.slice(0, 2);
const renderComponent = (props: Partial<SearchHotelListProps> = {}) =>
  render(
    <SearchHotelList
      hotels={props.hotels ?? []}
      loading={props.loading ?? false}
    />,
  );

describe("components/SearchHotelList", () => {
  describe("Loading state", () => {
    it("renders skeletons when loading is true", () => {
      renderComponent({ loading: true });

      // MUI Skeleton has role="progressbar"
      const skeletons = document.querySelectorAll(".MuiSkeleton-root");
      expect(skeletons).toHaveLength(3);
    });
  });

  describe("Empty state", () => {
    it("renders empty message when no hotels are found", () => {
      renderComponent({ hotels: [], loading: false });

      expect(
        screen.getByText("No hotels match your criteria."),
      ).toBeInTheDocument();
    });
  });

  describe("Hotels list", () => {
    it("renders a list of hotel cards", () => {
      //   renderComponent({ hotels: mockHotels });
      render(<SearchHotelList hotels={mockHotels} loading={false} />);
      const cards = screen.getAllByTestId("hotel--list-ui");
      // expect(cards).toBeInTheDocument()
      expect(cards).toHaveLength(2);
    });
  });

  describe("Priority rendering", () => {
    it("shows loading state even if hotels exist", () => {
      renderComponent({ hotels: mockHotels, loading: true });
      const skeletons = document.querySelectorAll(".MuiSkeleton-root");

      expect(skeletons).toHaveLength(3);
      expect(screen.queryByTestId("hotel--list-ui")).not.toBeInTheDocument();
    });
  });
});
