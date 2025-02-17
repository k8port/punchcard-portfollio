import { render, screen } from "@testing-library/react";
import Punchcard from "@/app/ui/Punchcard"; // Adjust path if needed
import "@testing-library/jest-dom";

// Mock Next.js Legacy Image component
jest.mock("next/legacy/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} data-testid="next-image" />,
}));

describe("Punchcard Component", () => {
  it("renders Punchcard component with children", () => {
    render(
      <Punchcard>
        <p data-testid="child">Punchcard Content</p>
      </Punchcard>
    );

    // Check if child content is rendered
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Punchcard Content")).toBeInTheDocument();
  });

  it("renders default image when no imageSrc is provided", () => {
    render(<Punchcard>Test</Punchcard>);

    // Verify default image is used
    const image = screen.getByTestId("next-image");
    expect(image).toHaveAttribute(
      "src",
      "/images/punchcard/punchcard_pink.png"
    );
    expect(image).toHaveAttribute("alt", "Jacquard Loom punch card");
  });

  it("renders custom image when imageSrc is provided", () => {
    render(<Punchcard imageSrc="/custom-image.png">Test</Punchcard>);

    // Verify custom image is used
    const image = screen.getByTestId("next-image");
    expect(image).toHaveAttribute("src", "/custom-image.png");
  });

  it("applies custom className if provided", () => {
    render(<Punchcard className="test-class">Test</Punchcard>);

    const container = screen.getByText("Test").parentElement?.parentElement;
    expect(container).toHaveClass("test-class");
  });
});
