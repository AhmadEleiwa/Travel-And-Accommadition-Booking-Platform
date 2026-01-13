import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Footer } from "./Footer";
import { render } from "../../test/render";

describe("components/Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("renders brand name and description", () => {
    render(<Footer />);

    expect(screen.getByText("Roam & Rest")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Experience the world's most luxurious stays with our curated selection of premium accommodations."
      )
    ).toBeInTheDocument();
  });

  it("renders all footer links", () => {
    render(<Footer />);

    const links = ["About Us", "Support", "Privacy", "Terms"];
    links.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders copyright text", () => {
    render(<Footer />);

    expect(
      screen.getByText("© 2024 Roam & Rest Platform. All rights reserved.")
    ).toBeInTheDocument();
  });
});
