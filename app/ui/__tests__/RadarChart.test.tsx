import { render, screen } from "@testing-library/react";
import RadarChart from "@/app/ui/RadarChart"; // Adjust path if needed
import "@testing-library/jest-dom";

// Mock the dynamically imported component
jest.mock("@/app/ui/RadarChartInner", () => ({
  __esModule: true,
  default: (props: any) => (
    <div data-testid="radar-chart-inner">Radar Chart Loaded</div>
  ),
}));

describe("RadarChart Component", () => {
  const mockData = [
    { skill: "React", value: 90 },
    { skill: "TypeScript", value: 85 },
  ];

  it("renders RadarChartInner when loaded", async () => {
    render(<RadarChart data={mockData} />);

    // Check if RadarChartInner is loaded
    expect(await screen.findByTestId("radar-chart-inner")).toBeInTheDocument();
  });
});
