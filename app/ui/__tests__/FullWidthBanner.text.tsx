import { render, screen } from "@testing-library/react";
import FullWidthBanner from "@/app/ui/FullWidthBanner"; // Adjust path if needed
import "@testing-library/jest-dom";

// Mock IconRow component since it's an external dependency
jest.mock("@/app/ui/IconRow", () => ({ icons }: { icons: any[] }) => (
  <div data-testid="icon-row">{icons.length} icons</div>
));

describe("FullWidthBanner Component", () => {
  const mockProps = {
    paragraphText: "This is a test paragraph.",
    headingText: "Test Heading",
    className: "test-class",
    icons: [
      { name: "Hammer", className: "text-red-500" },
      { name: "Screwdriver", className: "text-blue-500" },
    ],
  };

  it("renders FullWidthBanner with heading and paragraph text", () => {
    render(<FullWidthBanner {...mockProps} />);

    // Check if heading and paragraph text are rendered
    expect(screen.getByText("This is a test paragraph.")).toBeInTheDocument();
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });

  it("renders IconRow when icons are provided", () => {
    render(<FullWidthBanner {...mockProps} />);

    // Check if IconRow is rendered with correct icon count
    expect(screen.getByTestId("icon-row")).toHaveTextContent("2 icons");
  });

  it("does not render IconRow when no icons are provided", () => {
    render(<FullWidthBanner paragraphText="No icons" headingText="Test" />);

    // IconRow should not exist in the DOM
    expect(screen.queryByTestId("icon-row")).not.toBeInTheDocument();
  });

  it("applies custom className if provided", () => {
    render(<FullWidthBanner {...mockProps} />);
    const container = screen.getByTestId("banner-container");
    expect(container).toHaveClass("test-class");
  });
});
