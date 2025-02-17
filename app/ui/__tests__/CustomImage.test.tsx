import { render, screen } from "@testing-library/react";
import CustomImage from "@/app/ui/CustomImage"; // Adjust path if needed
import "@testing-library/jest-dom";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const newProps = { ...props };
    delete newProps.priority;
    delete newProps.fill;
    return <img {...newProps} data-testid="next-image" />;
  },
}));

describe("CustomImage Component", () => {
  const mockSrc = "/test-image.jpg";
  const mockAlt = "Test Image";

  it("renders the CustomImage component", () => {
    render(<CustomImage src={mockSrc} alt={mockAlt} />);

    // Verify Next.js Image component exists
    const image = screen.getByTestId("next-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockSrc);
    expect(image).toHaveAttribute("alt", mockAlt);
  });

  it("applies default classes when no props are provided", () => {
    render(<CustomImage src={mockSrc} alt={mockAlt} />);

    const container =
      screen.getByTestId("next-image").parentElement?.parentElement; // Outer div
    expect(container).toHaveClass(
      "w-50 h-50 bg-gray-200 border-2 border-lightgreen shadow-default"
    );
  });

  it("applies custom styling props", () => {
    render(
      <CustomImage
        src={mockSrc}
        alt={mockAlt}
        containerSize="w-60 h-60"
        imageSize="w-50 h-50"
        circleColor="bg-red-500"
        border="border-4 border-blue-500"
        shadow="shadow-lg"
      />
    );

    const container =
      screen.getByTestId("next-image").parentElement?.parentElement; // Outer div
    expect(container).toHaveClass(
      "w-60 h-60 bg-red-500 border-4 border-blue-500 shadow-lg"
    );
  });
});
