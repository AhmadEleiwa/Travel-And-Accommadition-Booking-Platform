import type { Meta, StoryObj } from "@storybook/react"; // Change this
import { BrowserRouter } from "react-router-dom";
import SearchFilters from ".";
import { type SearchFilterProps } from ".";
import { useArgs } from "storybook/internal/preview-api";

const meta = {
  title: "Search/SearchFilters",
  component: SearchFilters,
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
  args: {
    filters: { priceMax: 1000, stars: 5 },
    onChange: () => {},
  },
  render: (args) => {
    const { filters } = args;
    const [, updateArgs] = useArgs();
    return (
      <SearchFilters
        filters={filters}
        onChange={(nextFilters) => {
          updateArgs({ filters: nextFilters });
        }}
      />
    );
  },
  argTypes: {},
} satisfies Meta<SearchFilterProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
