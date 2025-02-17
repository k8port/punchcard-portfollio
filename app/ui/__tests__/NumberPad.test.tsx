import { render, screen } from "@testing-library/react";
import NumberPad from "@/app/ui/NumberPad"; // Adjust path if needed
import "@testing-library/jest-dom";

describe("NumberPad Component", () => {
  it("renders NumberPad with numbers 1-9", () => {
    render(<NumberPad />);

    // Check if numbers 1-9 exist
    for (let i = 1; i <= 9; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  it("renders a grid with 9 items", () => {
    render(<NumberPad />);

    // Get all grid items
    const gridItems = screen.getAllByText(/\d/);
    expect(gridItems).toHaveLength(9);
  });

  it("applies correct styling classes", () => {
    render(<NumberPad />);

    const firstGridItem = screen.getByText("1").parentElement;
    expect(firstGridItem).toHaveClass(
      "relative w-[60px] h-[60px] rounded-full bg-texturedbrass"
    );
  });
});
