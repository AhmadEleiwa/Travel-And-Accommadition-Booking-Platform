import type { Meta, StoryObj } from "@storybook/react"; // Change this
import { BrowserRouter } from "react-router-dom";
import SearchBar from ".";
import type { SearchBarProps } from "./SearchBar.type";

const meta = {
  title: "Search/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // It's better to put the Router decorator here so it applies to ALL stories
  decorators: [
    (Story) => (
      <BrowserRouter>
        {/* <Container sx={{ width: "100%", margin: "10px" }}> */}
        <Story />
        {/* </Container> */}
      </BrowserRouter>
    ),
  ],
  args: {},
  argTypes: {},
} satisfies Meta<SearchBarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
