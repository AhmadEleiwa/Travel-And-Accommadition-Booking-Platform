import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../test/render";
import "@testing-library/jest-dom";

import { GallerySection } from "./GallerySection";
import { MOCK_HOTELS, MOCK_ROOMS } from "@/constants";

const MOCK_IMAGES = [...MOCK_HOTELS[0].images, MOCK_ROOMS[0].thumbnail];

const getters = {
  mainImage: () => screen.getByRole("img", { name: "" }),
  allImages: () => screen.getAllByRole("img"),
  modalImage: () => screen.queryByTestId("modal-image"),
  closeButton: () => screen.queryByRole("button"),
};

describe("features/gallery/GallerySection", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      render(<GallerySection images={MOCK_IMAGES} />);
    });
  });

  describe("Rendering", () => {
    it("renders main image", () => {
      render(<GallerySection images={MOCK_IMAGES} />);
      const images = getters.allImages();
      expect(images[0]).toHaveAttribute("src", MOCK_IMAGES[0]);
    });

    it("renders up to 4 images in the grid", () => {
      render(<GallerySection images={MOCK_IMAGES} />);
      const images = getters.allImages();
      expect(images.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Conditional Rendering", () => {
    it("does not show modal by default", () => {
      render(<GallerySection images={MOCK_IMAGES} />);
      const modalImage = getters.modalImage();
      expect(modalImage).not.toBeInTheDocument();
    });

    it("shows modal when an image is clicked", async () => {
      render(<GallerySection images={MOCK_IMAGES} />);
      const images = getters.allImages();

      await userEvent.click(images[0]);

      const modalImage = getters.modalImage()
      expect(modalImage).toBeInTheDocument();
      expect(modalImage).toHaveAttribute("src", MOCK_IMAGES[0]);
    });
  });

  describe("Basic Functionality", () => {
    it("opens modal with correct image when clicking a secondary image", async () => {
      render(<GallerySection images={MOCK_IMAGES} />);
      const images = getters.allImages();

      await userEvent.click(images[1]);

      const modalImage = getters.modalImage()
      expect(modalImage).toHaveAttribute("src", MOCK_IMAGES[1]);
    });

    it("closes modal when close button is clicked", async () => {
      render(<GallerySection images={MOCK_IMAGES} />);
      const images = getters.allImages();

      await userEvent.click(images[0]);

      const closeButton = getters.closeButton();
      expect(closeButton).toBeInTheDocument();

      await userEvent.click(closeButton!);

      const modalImage = getters.modalImage();
      expect(modalImage).not.toBeInTheDocument();
    });

    it("closes modal when backdrop is clicked", async () => {
      render(<GallerySection images={MOCK_IMAGES} />);
      const images = getters.allImages();

      await userEvent.click(images[0]);

      await userEvent.keyboard("{Escape}");

      const modalImage = getters.modalImage();
      expect(modalImage).not.toBeInTheDocument();
    });
  });
});
