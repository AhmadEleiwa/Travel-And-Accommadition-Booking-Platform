    // src/test-utils.tsx
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import type { RenderOptions } from "@testing-library/react";
import React from "react";


// Custom render function
const renderWithRouter = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: BrowserRouter, ...options });
};

// Override render
export { renderWithRouter as render };
