// Mock the dynamically imported component
jest.mock("@/app/ui/RadarChartInner", () => {
  return function MockedRadarChartInner({ data }: { data: any[] }) {
    return <div data-testid="radar-chart-inner">Radar Chart Inner Loaded</div>;
  };
});

// Mock the RadarChart component since it's dynamically imported
jest.mock("@/app/ui/RadarChart", () => {
  return function MockedRadarChart({ data }: { data: any[] }) {
    return <div data-testid="radar-chart">{JSON.stringify(data)}</div>;
  };
});

import { render, screen, fireEvent } from "@testing-library/react";
import InterimSkillsPanel from "../InterimSkillsPanel";

describe("InterimSkillsPanel Component", () => {
  it("renders all category buttons", () => {
    render(<InterimSkillsPanel />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("DevOps")).toBeInTheDocument();
  });

  it("changes active category when clicking buttons", () => {
    render(<InterimSkillsPanel />);

    // Initially shows Frontend skills
    expect(screen.getByText("React")).toBeInTheDocument();

    // Click Backend button
    fireEvent.click(screen.getByText("Backend"));
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("displays correct number of skills for each category", () => {
    render(<InterimSkillsPanel />);
    const skillCards = screen.getAllByRole("button");
    expect(skillCards).toHaveLength(4); // Number of category buttons
  });

  it("applies custom className when provided", () => {
    const customClass = "test-class";
    render(<InterimSkillsPanel className={customClass} />);
    const container = screen.getByTestId("skills-panel");
    expect(container).toHaveClass(customClass);
  });

  it("shows skill levels correctly", () => {
    render(<InterimSkillsPanel />);
    expect(screen.getByText("Expert")).toBeInTheDocument(); // React is level 5
    expect(screen.getByText("Proficient")).toBeInTheDocument(); // TypeScript is level 4
  });
});
