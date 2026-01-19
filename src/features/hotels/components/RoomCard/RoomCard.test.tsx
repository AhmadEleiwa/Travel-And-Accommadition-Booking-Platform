import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Routes, Route } from "react-router-dom";
import { render } from "../../../../test/render";

import { RoomCard } from "./RoomCard";
import { MOCK_ROOMS } from "@/constants";

const MOCK_ROOM = MOCK_ROOMS[0];

const MOCK_HOTEL_ID = "hotel-123";
const getters = {
  thumbnail: () => screen.getByRole("img"),
  roomTitle: () => screen.getByText(new RegExp(`${MOCK_ROOM.type} Room`, "i")),
  roomNumberChip: () => screen.getByText(`No. ${MOCK_ROOM.roomNumber}`),
  description: () => screen.getByText(MOCK_ROOM.description),
  adultCapacity: () => screen.getByText(`Adults: ${MOCK_ROOM.adultCapacity}`),
  childrenCapacity: () =>
    screen.getByText(`Children: ${MOCK_ROOM.childrenCapacity}`),
  price: () => screen.getByText(`$${MOCK_ROOM.price}`),
  bookNowButton: () => screen.getByRole("button", { name: /book now/i }),
};

describe("features/rooms/RoomCard", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      render(<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />);
    });
  });

  describe("Rendering", () => {
    it("renders room thumbnail", () => {
      render(<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />);
      const image = getters.thumbnail();
      expect(image).toHaveAttribute("src", MOCK_ROOM.thumbnail);
    });

    it("renders room title and room number", () => {
      render(<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />);
      expect(getters.roomTitle()).toBeInTheDocument();
      expect(getters.roomNumberChip()).toBeInTheDocument();
    });

    it("renders description and capacities", () => {
      render(<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />);
      expect(getters.description()).toBeInTheDocument();
      expect(getters.adultCapacity()).toBeInTheDocument();
      expect(getters.childrenCapacity()).toBeInTheDocument();
    });

    it("renders price per night", () => {
      render(<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />);
      expect(getters.price()).toBeInTheDocument();
      expect(screen.getByText("/ night")).toBeInTheDocument();
    });
  });

  describe("Conditional Rendering", () => {
    it("always renders Book Now button", () => {
      render(<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />);
      expect(getters.bookNowButton()).toBeInTheDocument();
    });
  });

  describe("Basic Functionality", () => {
    it("navigates to checkout page with correct query params when clicking Book Now", async () => {
      render(
        <Routes>
          <Route
            path="/"
            element={<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />}
          />
          <Route path="/checkout" element={<h1>Checkout Page</h1>} />
        </Routes>,
      );

      const button = getters.bookNowButton();
      await userEvent.click(button);

      expect(screen.getByText("Checkout Page")).toBeInTheDocument();
    });

    it("generates correct checkout url", () => {
      render(<RoomCard hotelId={MOCK_HOTEL_ID} room={MOCK_ROOM} />);

      const button = getters.bookNowButton();
      expect(button).toBeInTheDocument();
    });
  });
});
