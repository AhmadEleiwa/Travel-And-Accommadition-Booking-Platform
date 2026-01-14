import type { Meta, StoryObj } from "@storybook/react";
import { Box, Container, type ButtonProps } from "@mui/material";
import { SearchButton } from "./SearchButton";

const meta = {
  title: "Components/Buttons/SearchButton",
  component: SearchButton,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container sx={{ width: "100%" }}>
        <Box
          display={"flex"}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Story />
        </Box>
      </Container>
    ),
  ],
  args: {},
} satisfies Meta<ButtonProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
