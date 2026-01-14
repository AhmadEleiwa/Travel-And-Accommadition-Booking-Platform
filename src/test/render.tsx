// src/test-utils.tsx
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import type { RenderOptions } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export { customRender as render };
