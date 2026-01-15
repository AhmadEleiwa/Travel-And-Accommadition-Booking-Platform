import type { Meta, StoryObj } from "@storybook/react"; // Change this
import { BrowserRouter } from "react-router-dom";
import SearchHotelList from ".";
import { type SearchHotelListProps } from ".";
import { MOCK_HOTELS } from "@/constants";
import { Container } from "@mui/material";

const meta = {
  title: "Search/SearchHotelList",
  component: SearchHotelList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // It's better to put the Router decorator here so it applies to ALL stories
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Container sx={{ width: "100vw", margin: "10px" }}>
        <Story />
        </Container>
      </BrowserRouter>
    ),
  ],
  args: {
    hotels: MOCK_HOTELS,
    loading: false,
  },
  argTypes: {},
} satisfies Meta<SearchHotelListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = {
  args: {
    hotels:MOCK_HOTELS,
    loading: true,
  },
};
