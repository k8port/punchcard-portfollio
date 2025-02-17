import { render, screen } from "@testing-library/react";
import Projects from "@/app/ui/Projects"; // Adjust path if needed
import "@testing-library/jest-dom";

// Mock child components
jest.mock(
  "@/app/ui/Punchcard",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      (
        <div data-testid="punchcard" className="test-class">
          {children}
        </div>
      )
);

jest.mock("@/app/ui/NumberPad", () => () => (
  <div data-testid="number-pad">NumberPad</div>
));

jest.mock(
  "@/app/ui/FullWidthBanner",
  () =>
    ({ headingText }: { headingText: string }) =>
      <div data-testid="full-width-banner">{headingText}</div>
);

describe("Projects Component", () => {
  it("renders the Projects component with correct content", () => {
    render(<Projects />);

    // Verify Punchcard wrapper exists
    expect(screen.getByTestId("punchcard")).toBeInTheDocument();

    // Check if title is present
    expect(screen.getByText("Projects")).toBeInTheDocument();

    // Verify FullWidthBanner and NumberPad render
    expect(screen.getByTestId("full-width-banner")).toHaveTextContent(
      "Under Construction"
    );
    expect(screen.getByTestId("number-pad")).toBeInTheDocument();
  });

  it("applies custom className if provided", () => {
    render(<Projects className="test-class" />);
    expect(screen.getByTestId("punchcard")).toHaveClass("test-class");
  });
});
