import { render, screen } from "@testing-library/react";
import SkillsPanel from "@/app/ui/SkillsPanel"; // Adjust path if needed
import "@testing-library/jest-dom";

// Mock child components
jest.mock(
  "@/app/ui/Punchcard",
  () =>
    ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) =>
      (
        <div data-testid="punchcard" className={className}>
          {children}
        </div>
      )
);

jest.mock("@/app/ui/InterimSkillsPanel", () => () => (
  <div data-testid="interim-skills-panel">InterimSkillsPanel</div>
));

const mockSkills = [
  {
    topic: "Frontend",
    topicList: [{ subtopic: "React", subtopicList: [] }],
  },
];

describe("SkillsPanel Component", () => {
  it("renders SkillsPanel with label", () => {
    render(<SkillsPanel label="My Skills" skills={mockSkills} />);

    // Check if label is rendered
    expect(screen.getByText("My Skills")).toBeInTheDocument();
  });

  it("renders Punchcard and InterimSkillsPanel components", () => {
    render(<SkillsPanel label="Skills" skills={mockSkills} />);

    // Verify Punchcard renders
    expect(screen.getByTestId("punchcard")).toBeInTheDocument();

    // Verify InterimSkillsPanel renders
    expect(screen.getByTestId("interim-skills-panel")).toBeInTheDocument();
  });

  it("applies custom className if provided", () => {
    render(
      <SkillsPanel label="Skills" skills={mockSkills} className="test-class" />
    );
    const punchcard = screen.getByTestId("punchcard");

    expect(punchcard).toHaveClass("test-class");
  });
});
