import { render, screen } from "@testing-library/react";
import OrnateBorder from "@/app/ui/OrnateBorder"; // Adjust path if needed
import "@testing-library/jest-dom";

describe("OrnateBorder Component", () => {
  it("renders children correctly", () => {
    render(
      <OrnateBorder>
        <p data-testid="child">Hello, World!</p>
      </OrnateBorder>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("applies default border color if none is provided", () => {
    render(<OrnateBorder>Test</OrnateBorder>);
    const container = screen.getByText("Test").parentElement;
    expect(container).toHaveClass("border-antiqueblack");
  });

  it("applies custom border color when provided", () => {
    render(<OrnateBorder borderColor="border-red-500">Test</OrnateBorder>);
    const container = screen.getByText("Test").parentElement;
    expect(container).toHaveClass("border-red-500");
  });

  it("applies custom background color when provided", () => {
    render(<OrnateBorder bgColor="bg-blue-500">Test</OrnateBorder>);
    const container = screen.getByText("Test").parentElement;
    expect(container).toHaveClass("bg-blue-500");
  });
});
