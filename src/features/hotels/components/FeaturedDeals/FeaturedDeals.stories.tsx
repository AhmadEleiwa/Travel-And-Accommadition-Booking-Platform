import type { Meta, StoryObj } from "@storybook/react"; // Change this
import { BrowserRouter } from "react-router-dom";
import { MOCK_HOTELS } from "../../../../constants";
import { Container } from "@mui/material";
import FeaturedDeals from ".";

const meta = {
  title: "Hotel/FeaturedDeals",
  component: FeaturedDeals,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // It's better to put the Router decorator here so it applies to ALL stories
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Container sx={{ width: "100%", margin: "10px" }}>
          <Story />
        </Container>
      </BrowserRouter>
    ),
  ],
  args: {
    featured: MOCK_HOTELS,
  },

} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
