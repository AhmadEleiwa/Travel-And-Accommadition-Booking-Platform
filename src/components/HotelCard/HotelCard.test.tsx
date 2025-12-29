import { describe } from "node:test";
import { expect } from "vitest";
import { screen } from "@testing-library/react";
import HotelCard from "./HotelCard";

import "@testing-library/jest-dom";
import { renderWithRouter } from "../../test-utils";
import { MOCK_HOTELS } from "../../constants";
import userEvent from '@testing-library/user-event';
import { Routes, Route } from "react-router-dom";

describe("HotelCard", () => {
  it("check default variant", () => {
    renderWithRouter(<HotelCard hotel={MOCK_HOTELS[0]} />);
    const compactElement = screen.getByTestId("hotel--compact-ui");
    expect(compactElement).toBeInTheDocument();
  });
  it("renders compact variant when variant='compact'", () => {
    renderWithRouter(<HotelCard hotel={MOCK_HOTELS[0]} variant="compact" />);
    const compactElement = screen.getByTestId("hotel--compact-ui");
    expect(compactElement).toBeInTheDocument();
  });
  it("renders compact variant when variant='featured'", () => {
    renderWithRouter(<HotelCard hotel={MOCK_HOTELS[0]} variant="featured" />);
    const compactElement = screen.getByTestId("hotel--featured-ui");
    expect(compactElement).toBeInTheDocument();
  });
  it("renders compact variant when variant='list'", () => {
    renderWithRouter(<HotelCard hotel={MOCK_HOTELS[0]} variant="list" />);
    const compactElement = screen.getByTestId("hotel--list-ui");
    expect(compactElement).toBeInTheDocument();
  });
    it("renders compact variant when variant='featured' and showSaleBadge=false ", () => {
    renderWithRouter(<HotelCard hotel={MOCK_HOTELS[0]} variant="featured" />);
    const compactElement = screen.queryByTestId("hotel--featured-ui--salebadge");
    expect(compactElement).not.toBeInTheDocument()
  });
      it("renders compact variant when variant='featured' and showSaleBadge=true ", () => {
    renderWithRouter(<HotelCard hotel={MOCK_HOTELS[0]} showSaleBadge variant="featured" />);
    const compactElement = screen.queryByTestId("hotel--featured-ui--salebadge");
    expect(compactElement).toBeInTheDocument()
  });
it('navigates to correct hotel url', () => {
  renderWithRouter(<HotelCard hotel={MOCK_HOTELS[0]} />);

  const link = screen.getByTestId('hotel--compact-ui');
  expect(link).toHaveAttribute('href', `/hotel/${MOCK_HOTELS[0].id}`);
});
it('navigates to hotel details page when clicked', async () => {
  renderWithRouter(
    <Routes>
      <Route path="/" element={<HotelCard hotel={MOCK_HOTELS[0]} />} />
      <Route path="/hotel/:id" element={<h1>Hotel Details</h1>} />
    </Routes>,
  );
  const link = screen.getByTestId('hotel--compact-ui');
  await userEvent.click(link)
  expect(screen.getByText('Hotel Details')).toBeInTheDocument();
});
});
