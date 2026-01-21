import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import type { GallerySectionProps } from "./GallerySection.types";

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      {/* EXACT GRID MATCH */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(4, 1fr)",
          },
          gridTemplateRows: { md: "repeat(2, 1fr)", xs: "1fr" },
          gap: 2,
          height: { md: 550, xs: 200 },
          mb: 8,
        }}
      >
        {/* MAIN IMAGE */}
        <Box
          onClick={() => setSelected(images[0])}
          sx={{
            height: "100%",
            gridColumn: { md: "span 2" },
            gridRow: { md: "span 2" },
            borderRadius: 4,
            overflow: "hidden",
            cursor: "zoom-in",
            position: "relative",
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform .7s",
            },
            "&:hover img": {
              transform: "scale(1.05)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.1)",
              transition: "opacity .3s",
            },
            "&:hover::after": {
              opacity: 0,
            },
          }}
        >
          <img src={images[0]} />
        </Box>

        {/* RIGHT 4 IMAGES */}
        {images.slice(1, 4).map((img, i) => (
          <Box
            key={i}
            onClick={() => setSelected(img)}
            sx={{
              display: { xs: "none", md: "block" },
              borderRadius: 4,
              overflow: "hidden",
              cursor: "zoom-in",
              position: "relative",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .7s",
              },
              "&:hover img": {
                transform: "scale(1.1)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.1)",
                transition: "opacity .3s",
              },
              "&:hover::after": {
                opacity: 0,
              },
            }}
          >
            <img src={img} />
          </Box>
        ))}
      </Box>

      {/* FULLSCREEN MODAL */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={() => setSelected(null)}
            sx={{ position: "absolute", top: 24, right: 24, color: "#fff" }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <img
            src={selected!}
            data-testid="modal-image"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: 12,
            }}
          />
        </Box>
      </Modal>
    </>
  );
};
