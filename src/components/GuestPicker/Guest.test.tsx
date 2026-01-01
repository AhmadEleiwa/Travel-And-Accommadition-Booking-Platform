import { describe, it, expect, vi } from "vitest";
import {screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GuestPicker } from "./GuestPicker";
import type { GuestType } from "./GuestPicker.type";
import {render} from '../../test/render'
import "@testing-library/jest-dom";

const defaultGuests: GuestType = { adults: 2, children: 1, rooms: 1 };

describe("components/GuestPicker", () => {
  const setup = (guests = defaultGuests, setGuests = vi.fn()) => {
    render(<GuestPicker guests={guests} setGuests={setGuests} />);
    const user = userEvent.setup();
    const getters = {
      guestButton: () => screen.getByRole("button", { name: /guests/i }),
      doneButton: () => screen.getByRole("button", { name: /done/i }),
      adultIncrement: () => screen.getAllByText("+")[0],
      adultDecrement: () => screen.getAllByText("-")[0],
      childrenIncrement: () => screen.getAllByText("+")[1],
      childrenDecrement: () => screen.getAllByText("-")[1],
      roomsIncrement: () => screen.getAllByText("+")[2],
      roomsDecrement: () => screen.getAllByText("-")[2],
      adultsCount: () => screen.getByText(guests.adults.toString()),
    };
    return { user, getters, setGuests };
  };

  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      const { getters } = setup();
      expect(getters.guestButton()).toBeInTheDocument();
    });
  });

  describe("Props Rendering", () => {
    it("displays correct initial guest counts", () => {
      setup();
      expect(screen.getByText(/3 Guests, 1 Room/i)).toBeInTheDocument();
    });
  });

  describe("Conditional Rendering", () => {
    it("opens menu when guest button is clicked", async () => {
      const { user, getters } = setup();
      await user.click(getters.guestButton());
      expect(screen.getByText(/Adults/i)).toBeInTheDocument();
      expect(screen.getByText(/Children/i)).toBeInTheDocument();
      expect(screen.getByText(/Rooms/i)).toBeInTheDocument();
    });

    it("closes menu when Done button is clicked", async () => {
      const { user, getters } = setup();
      await user.click(getters.guestButton());
      await user.click(getters.doneButton());
      expect(screen.queryByText(/Adults/i)).not.toBeInTheDocument();
    });
  });

  describe("Basic Functionality", () => {
    it("calls setGuests when incrementing/decrementing adults", async () => {
      const { user, getters, setGuests } = setup();
      await user.click(getters.guestButton());

      await user.click(getters.adultIncrement());
      expect(setGuests).toHaveBeenCalledWith({ ...defaultGuests, adults: 3 });

      await user.click(getters.adultDecrement());
      expect(setGuests).toHaveBeenCalledWith({ ...defaultGuests, adults: 1 });
    });

    it("does not decrement below zero", async () => {
      const guests: GuestType = { adults: 0, children: 0, rooms: 0 };
      const { user, getters, setGuests } = setup(guests);

      await user.click(getters.guestButton());
      await user.click(getters.adultDecrement());

      expect(setGuests).toHaveBeenCalledWith({ adults: 0, children: 0, rooms: 0 });
    });
  });
});
