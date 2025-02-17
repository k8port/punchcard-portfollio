import React from "react";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // remove priority and fill from props
    const { priority, fill, ...rest } = props;
    return React.createElement("img", rest);
  },
}));

import "@testing-library/jest-dom";
import "jest-canvas-mock";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: "",
    };
  },
  usePathname() {
    return "";
  },
}));

// Mock ResizeObserver
window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// **Updated Chart.js mock:**
jest.mock("chart.js", () => {
  const register = jest.fn();
  const Chart = jest.fn(() => ({
    destroy: jest.fn(),
    update: jest.fn(),
    render: jest.fn(),
  }));
  // Attach register as a property of Chart with a type cast
  (Chart as any).register = register;
  return {
    Chart,
    registerables: [],
    register,
  };
});

// Suppress specific console errors
const originalError = console.error;
console.error = (...args) => {
  // You can add other warnings to suppress here if desired:
  if (/Warning.*not wrapped in act/.test(args[0])) return;
  originalError.call(console, ...args);
};
