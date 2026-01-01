import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { render } from "../../../test/render";
import { SearchBar } from "./SearchBar";
import { type SearchBarProps } from "./SearchBar.type";
import { Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const defaultProps: SearchBarProps = {
  initialQuery: "Japan",
};
const getters = {
  locationInput: () => screen.getByLabelText(/location/i) as HTMLInputElement,
  checkInInput: () => screen.getByTestId("check-in"),
  checkOutInput: () => screen.getByTestId("check-out"),
  guestButton: () => screen.getByRole("button", { name: /guests/i }),
  searchButton: () => screen.getByRole("button", { name: /search/i }),
};

describe("components/SearchBar", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      render(<SearchBar />);
      expect(getters.locationInput()).toBeInTheDocument();
      expect(getters.checkInInput()).toBeInTheDocument();
      expect(getters.checkOutInput()).toBeInTheDocument();
      expect(getters.guestButton()).toBeInTheDocument();
      expect(getters.searchButton()).toBeInTheDocument();
    });
  });
  describe("Props Rendering", () => {
    it("displays the initial query value", () => {
      render(<SearchBar {...defaultProps} />);
      const input = getters.locationInput();
      expect(input).toHaveValue("Japan");
    });
  });
  describe("Basic Functionality", () => {
    it("click on search button navigate to Search Page with url paramters q=Japan", async () => {
      const user = userEvent.setup();
      render(
        <Routes>
          <Route index path="/" element={<SearchBar {...defaultProps} />} />
          <Route path="search" element={<h1>Search Page</h1>} />
        </Routes>
      );
      getters.searchButton();
      await user.click(getters.searchButton());
      expect(screen.getByText("Search Page")).toBeInTheDocument();
      const url = window.location.search;
      expect(url).toContain("q=Japan");
    });
  });
});
