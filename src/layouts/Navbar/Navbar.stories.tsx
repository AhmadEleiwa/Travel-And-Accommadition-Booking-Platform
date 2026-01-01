import type { Meta, StoryObj } from "@storybook/react";
import type NavbarProps from "./Navbar.type";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import type { User } from "../../features/auth";

const MOCK_USER: User = {
  email: "username@gmail.com",
  role: "USER",
  username: "username",
  id: "@145",
};
const meta = {
  title: "Layout/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    user: MOCK_USER,
    onLogout: () => {},
  },

  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
} satisfies Meta<NavbarProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NormalUser: Story = {};
export const Logout: Story = {
  args: {
    user: null,
  },
};
export const Admin: Story = {
  args: {
    user: { ...MOCK_USER, role: "ADMIN" },
  },
};
