import { render, screen } from "@testing-library/react";
import RadarChartInner from "@/app/ui/RadarChartInner"; // Adjust path if needed
import "@testing-library/jest-dom";

jest.mock("react-chartjs-2", () => ({
  Radar: (props: any) => (
    <div data-testid="radar-chart" data-props={JSON.stringify(props.data)} />
  ),
}));

describe("RadarChartInner Component", () => {
  const mockData = [
    { skill: "React", value: 4 },
    { skill: "TypeScript", value: 5 },
    { skill: "Next.js", value: 3 },
  ];

  it("renders the RadarChartInner component", () => {
    render(<RadarChartInner data={mockData} />);

    // Ensure the Radar chart is rendered
    expect(screen.getByTestId("radar-chart")).toBeInTheDocument();
  });

  it("passes the correct data to the Radar chart", () => {
    render(<RadarChartInner data={mockData} />);

    // Extract the Radar chart props
    const radarProps = JSON.parse(
      screen.getByTestId("radar-chart").dataset.props!
    );

    expect(radarProps.labels).toEqual(["React", "TypeScript", "Next.js"]);
    expect(radarProps.datasets[0].data).toEqual([4, 5, 3]);
  });
});
