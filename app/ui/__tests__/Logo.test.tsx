import { render, screen } from "@testing-library/react";
import Logo from "@/app/ui/Logo"; // Adjust path if needed
import "@testing-library/jest-dom";
import React from "react";

// mock next.js legacy image component
jest.mock("next/legacy/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const newProps = { ...props };
    delete newProps.priority;
    return <img {...newProps} data-testid="next-image" />;
  },
}));

// Mock child components
jest.mock("@/app/ui/CustomImage", () => () => (
  <div data-testid="custom-image">CustomImage</div>
));
jest.mock(
  "@/app/ui/OrnateBorder",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <div data-testid="ornate-border">{children}</div>
);

describe("Logo Component", () => {
  const mockLogo = {
    motto: "Per Aspera Ad Astra",
    motto_translation: "Through Hardships to the Stars",
  };

  it("renders the Logo component with correct content", () => {
    render(<Logo logo={mockLogo} />);

    // Verify container exists
    expect(screen.getByTestId("logo-container")).toBeInTheDocument();

    // Check if motto text renders
    expect(screen.getByText("Per Aspera Ad Astra")).toBeInTheDocument();

    // Verify OrnateBorder and CustomizableImage render
    expect(screen.getByTestId("ornate-border")).toBeInTheDocument();
    expect(screen.getByTestId("custom-image")).toBeInTheDocument();

    // Ensure Next.js Image component renders
    expect(screen.getByTestId("next-image")).toBeInTheDocument();
    expect(screen.getByTestId("next-image")).toHaveAttribute("alt", "Portrait");
  });

  it("applies custom className if provided", () => {
    render(<Logo logo={mockLogo} className="test-class" />);
    expect(screen.getByTestId("logo-container")).toHaveClass("test-class");
  });
});
