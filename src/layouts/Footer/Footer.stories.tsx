import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {},

  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
} satisfies Meta<any>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NormalUser: Story = {};
export const Logout: Story = {
  args: {
    user: null,
  },
};
